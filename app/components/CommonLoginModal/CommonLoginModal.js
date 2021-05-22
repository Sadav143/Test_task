/**
 * Common Login Modal
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  BackHandler,
  Dimensions,
  TextInput,
  Modal,
  TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as STR_CONST from '../../../app/theme/StringConstants';
import { FONTS } from '../../../app/theme/ColorConstants';
import * as Validators from '../../utils/Validators';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import styles from './CommonLoginModalStyle';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import SmsRetriever from 'react-native-sms-retriever';
import { connect } from 'react-redux';

class CommonLoginModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileNo: '',
      password: '',
      referralCode: '',
      loginModal: true,
      noOfOtpBoxes: 4,
      otp: [],
      loading: false,
      isInvalidCode: false,
      mobileNoError: false,
      referralError: false,
      isOTPSent: false,
      otpError: false,
      showResendButton: false,
      showIncorrectOTP: false,
      haveReferralCode: false,
    }
    this.otpTextInput = [];
  }

  componentDidMount() {
    this._onSmsListenerPressed();
    this.getAppSignature();
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillMount() {
  }

  _onPhoneNumberPressed = async () => {
    try {
      const phoneNumber = await SmsRetriever.requestPhoneNumber();
      this.setState({ mobileNo: phoneNumber.replace('+91', '') });
      console.log('@@@ Phone No ==========', phoneNumber);
    } catch (error) {
      console.log('@@@ Phone No Error ==========', JSON.stringify(error));
    }
  };

  getAppSignature = async () => {
    try {
      const appSignature = await SmsRetriever.getAppSignature();
      console.log('@@@ App Signature ==========', appSignature);
    } catch (error) {
      console.log('@@@ App Signature Error ==========', JSON.stringify(error));
    }
  };

  _onSmsListenerPressed = async () => {
    try {
      const registered = await SmsRetriever.startSmsRetriever();
      if (registered) {
        SmsRetriever.addSmsListener(event => {
          if(event && event.message) {
            const otp = /(\d{4})/g.exec(event.message)[1];
            console.log('@@@ SMS ==================', event.message, otp);
            this.setState({ otp: otp.split('') }, () => {
              this.onPressLogin();
            });
            SmsRetriever.removeSmsListener();
          }
        });
      }
    } catch (error) {
      console.log('@@@ SMS ==================', JSON.stringify(error));
    }
  };

  handleBackPress = async () => {
    await this.props.navigation.goBack()
    return true;
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  onLoginUser = async (item, value) => {
    let data = {
      contact: this.state.mobileNo
    }
    if (this.state.referralCode.trim().length !== 0 && this.state.haveReferralCode) {
      data['referral_code'] = this.state.referralCode;
    }
    this.props.onLoginUser(data, (res) => this.onLoginUserSuccessCallBack(res), (error) => this.onLoginUserFailureCallBack(error));
  }

  onLoginUserSuccessCallBack = (res) => {
    console.log('@@@ On Login Success CallBack =============', res);
    this.setState({ isOTPSent: true });
  }

  onLoginUserFailureCallBack = (error) => {
    console.log('@@@ On Login Failure CallBack ===================');
    if (error) {
      setTimeout(() => {
        this.props.showErrorModal(error);
      }, 0);
    } else {
      setTimeout(() => {
        this.props.showErrorModal('Network Error!');
      }, 0);
    }
  }

  focusPrevious(key, index) {
    if (key === 'Backspace' && index !== 0) {
      if (this.state.otp[index] !== '')
        this.otpTextInput[index].focus();
      else
        this.otpTextInput[index - 1].focus();
      const otp = this.state.otp;
      if (this.state.otp[index] !== '') {
        this.otpTextInput[index].focus();
        otp[index] = '';
      } else
        otp[index - 1] = '';
      this.setState({ otp }, () => {
      });
    } else if (key === 'Backspace') {
      const otp = this.state.otp;
      if (this.state.otp[index] !== '') {
        otp[index] = '';
      }
      this.setState({ otp }, () => {
        this.otpTextInput[index].focus();

      });
    }
    else if (index === this.state.noOfOtpBoxes - 1) {
      this.otpTextInput[index].blur();
    }
  }

  focusNext(index, value) {
    this.setState({ mobileNoError: false, otpError: false, showIncorrectOTP: false, showResendButton: false });
    if (this.state.otp.join('').length !== 4) {
      this.setState({ isInvalidCode: false });
      if (index < this.otpTextInput.length - 1 && value) {
        this.otpTextInput[index + 1].focus();
      }
      const otp = this.state.otp;
      otp[index] = value;
      this.setState({ otp }, () => {
        if (this.state.otp.join('').length === this.state.noOfOtpBoxes) {
          this.otpTextInput[index].blur();
        }
      });
    }
  }

  onSubmitEditing = () => {
    this.setState({ mobileNoError: false, otpError: false, showIncorrectOTP: false, showResendButton: false, otp: [], isOTPSent: false }, () => {
      if (this.state.mobileNo.trim().length !== 10 || !Validators.isPhoneNoValid(this.state.mobileNo)) {
        this.setState({ mobileNoError: true });
        return;
      }
      this.onLoginUser();
    });
  }

  onPressLogin = () => {
    if (this.state.mobileNo.trim().length !== 10 || !Validators.isPhoneNoValid(this.state.mobileNo)) {
      this.setState({ mobileNoError: true });
      return;
    }
    if (this.state.otp.join('').length !== 4) {
      this.setState({ otpError: true });
      return;
    }
    this.verifyUser();
  }

  verifyUser = async (item, value) => {
    let data = {
      contact: this.state.mobileNo.trim(),
      otp: this.state.otp.join(''),
      device_uuid: DeviceInfo.getUniqueId(),
    }
    if (this.state.referralCode.trim().length !== 0 && this.state.haveReferralCode) {
      data['referral_code'] = this.state.referralCode;
    }
    this.props.verifyUser(data, (res) => this.verifyUserSuccessCallBack(res), (error) => this.verifyUserFailureCallBack(error));
  }

  verifyUserSuccessCallBack = async (res) => {
    console.log('@@@ On Verify Success CallBack =============', res);
    const { first_name } = res.data.userInfo;
    const userName = first_name ? `Hello ${first_name}, Welcome to NamoIndia` : 'Hello, Welcome to NamoIndia.'
    setTimeout(() => {
      this.props.showErrorModal(userName, false);
    }, 2000);
    await AsyncStorage.setItem('USER_TOKEN', res.data.userInfo.token);
    this.props.onLoginSuccess();
  }

  verifyUserFailureCallBack = (error) => {
    console.log('@@@ On Verify Failure CallBack ===================', error);
    this.setState({ showIncorrectOTP: true, showResendButton: true });
    if (error) {
      setTimeout(() => {
        this.props.showErrorModal(error);
      }, 0);
    } else {
      setTimeout(() => {
        this.props.showErrorModal('Network Error!');
      }, 0);
    }
  }

  renderInputs() {
    const inputs = Array(this.state.noOfOtpBoxes).fill(0);
    const txtFields = inputs.map(
      (item, index) =>
        <TextInput
          style={styles.inputBox}
          maxLength={1}
          value={this.state.otp[index]}
          keyboardType={"number-pad"}
          onChangeText={v => this.focusNext(index, v)}
          onKeyPress={e => this.focusPrevious(e.nativeEvent.key, index)}
          ref={ref => this.otpTextInput[index] = ref}
          returnKeyType={'done'}
        />
    );

    return (
      <View style={styles.inputBoxContainer}>
        {txtFields}
      </View>
    );
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          this.props.closeLoginModal();
        }}>
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
          <TouchableOpacity activeOpacity={1} style={styles.modalContainer}
            onPress={() => this.setState({ loginModal: false })} >
            <TouchableOpacity activeOpacity={1} style={styles.popup}>
              <TouchableOpacity onPress={() => { this.props.closeLoginModal() }} style={styles.backContainer1}>
                <Image source={IMG_CONST.BACK_ARROW} style={styles.backIcon1} />
                <Text style={styles.productName1}>Login/Signup</Text>
              </TouchableOpacity>
              <View style={styles.dobInputContainer}>
                <Text style={[styles.labelStyle, { color: this.state.mobileNoError ? COLOR_CONST.redTextColor : COLOR_CONST.greyColor }]}>Enter your mobile number</Text>
                <TextInput
                  style={styles.inputContainer1}
                  onChangeText={(value) => this.setState({ mobileNo: value, mobileNoError: false, otpError: false, isOTPSent: false })}
                  value={this.state.mobileNo}
                  keyboardType={"number-pad"}
                  placeholder=""
                  placeholderTextColor={COLOR_CONST.greyTitleColor}
                  underlineColorAndroid="transparent"
                  onSubmitEditing={() => this.onSubmitEditing()}
                />
              </View>
              {this.state.isOTPSent && <View style={styles.dobInputContainer}>
                <Text style={[styles.labelStyle, { color: this.state.otpError ? COLOR_CONST.redTextColor : COLOR_CONST.greyColor }]}>Enter the OTP</Text>
                {this.renderInputs()}
              </View>}
              {(!this.state.isOTPSent || this.state.referralCode.length > 0) && this.state.haveReferralCode && <View style={styles.dobInputContainer}>
                <Text style={[styles.labelStyle, { color: this.state.referralError ? COLOR_CONST.redTextColor : COLOR_CONST.greyColor }]}>Enter the Referral Code</Text>
                <TextInput
                  style={styles.inputContainer1}
                  onChangeText={(value) => this.setState({ referralCode: value, referralError: false, otpError: false, isOTPSent: false })}
                  value={this.state.referralCode}
                  placeholder=""
                  placeholderTextColor={COLOR_CONST.greyTitleColor}
                  underlineColorAndroid="transparent"
                  onSubmitEditing={() => this.onSubmitEditing()}
                />
              </View>}
              {!this.state.isOTPSent && <TouchableOpacity onPress={() => this.setState({ haveReferralCode: !this.state.haveReferralCode })}>
                <Text style={styles.referralText}>Have a Referral Code ?</Text>
              </TouchableOpacity>}
              {this.state.showIncorrectOTP && <Text style={styles.incorrectOTP}>Incorrect OTP!</Text>}
              {this.state.showResendButton && <TouchableOpacity onPress={() => this.onSubmitEditing()}>
                <Text style={styles.resendText}>RESEND OTP</Text>
              </TouchableOpacity>}
              <TouchableOpacity onPress={() => !this.state.isOTPSent ? this.onSubmitEditing() : this.onPressLogin()} style={styles.saveButton}>
                <Text style={styles.saveText}>Login/Signup</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </Modal>
    );
  }
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showLoginModal: () => dispatch(commonActions.showLoginModal()),
    hideLoginModal: () => dispatch(commonActions.hideLoginModal()),
    showErrorModal: (message, isFromError) => dispatch(commonActions.showErrorModal(message, isFromError)),
    hideErrorModal: () => dispatch(commonActions.hideErrorModal()),
    onLoginUser: (data, successCallBack, failureCallBack) => dispatch(userActions.onLoginUser(data, successCallBack, failureCallBack)),
    verifyUser: (data, successCallBack, failureCallBack) => dispatch(userActions.verifyUser(data, successCallBack, failureCallBack)),
    resendOTP: (data, successCallBack, failureCallBack) => dispatch(userActions.resendOTP(data, successCallBack, failureCallBack)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CommonLoginModal);