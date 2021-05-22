// @flow


import { getAxiosInstance, getAxiosInstanceImage } from './AxiosWrapper';
import { BASE_URL, GLOBAL_URL } from '../config/index.dev';

export async function performPostRequest(endPoint, jsonRequest) {
  let wrapper = await getAxiosInstance();
  let API_URL = BASE_URL + endPoint
  console.log('@@@ Options POST ===========', wrapper)
  console.log('@@@ JSON REQUEST ===========', jsonRequest)
  console.log('@@@ URL ==============', endPoint);

  return wrapper.post(API_URL, jsonRequest).then((res) => {
    console.log('@@@ RESPONSE ==============', res);
    return res
  })
    .catch(ex => {
      throw ex
  })
}

export async function performPatchRequest(endPoint, jsonRequest) {
  let wrapper = await getAxiosInstance();
  let API_URL = BASE_URL + endPoint
  console.log('@@@ Options PATCH ===========', wrapper)
  console.log('@@@ JSON REQUEST ===========', jsonRequest)
  console.log('@@@ URL ==============', endPoint);

  return wrapper.patch(API_URL, jsonRequest).then((res) => {
    console.log('@@@ RESPONSE ==============', res);
    return res
  })
    .catch(ex => {
      throw ex
  })
}

export async function performPutRequest(endPoint, jsonRequest) {
  let wrapper = await getAxiosInstance();
  let API_URL = BASE_URL + endPoint
  console.log('@@@ Options PUT ===========', wrapper)
  console.log('@@@ JSON REQUEST ===========', jsonRequest)
  console.log('@@@ URL ==============', endPoint);

  return wrapper.put(API_URL, jsonRequest).then((res) => {
    console.log('@@@ RESPONSE ==============', res);
    return res
  })
    .catch(ex => {
      throw ex
    })
}

export async function performPutRequestImage(endPoint, jsonRequest) {
  let wrapper = await getAxiosInstanceImage();
  let API_URL = BASE_URL + endPoint
  console.log('@@@ Options PUT REQUEST IMAGE ===========', wrapper)
  console.log('@@@ JSON REQUEST ===========', jsonRequest)
  console.log('@@@ URL ==============', endPoint);

  return wrapper.put(API_URL, jsonRequest).then((res) => {
    console.log('@@@ RESPONSE ==============', res);
    return res
  })
    .catch(ex => {
      throw ex
    })
}

export async function performDeleteRequest(endPoint, jsonRequest) {
  let wrapper = await getAxiosInstance();
  let API_URL = BASE_URL + endPoint
  console.log('@@@ Options DELETE ===========', wrapper)
  console.log('@@@ JSON REQUEST ===========', jsonRequest)
  console.log('@@@ URL ==============', endPoint);

  return wrapper.delete(API_URL, jsonRequest).then((res) => {
    console.log('@@@ RESPONSE ==============', res);
    return res
  })
    .catch(ex => {
      throw ex
  })
}

export async function performGetRequest(endPoint) {
  let wrapper = await getAxiosInstance();
  let API_URL = BASE_URL + endPoint
  console.log('@@@ Options GET ===========', wrapper)
  console.log('@@@ URL ==============', endPoint);

  return wrapper.get(API_URL).then((res) => {
    console.log('@@@ RESPONSE ==============', res);
    return res
  })
    .catch(ex => {
      throw ex
  })
}

export async function performGetRequestGlobal(endPoint) {
  let wrapper = await getAxiosInstance();
  let API_URL = GLOBAL_URL + endPoint
  console.log('@@@ Options GET GLOBAL ===========', wrapper)
  console.log('@@@ URL ==============', endPoint);

  return wrapper.get(API_URL).then((res) => {
    console.log('@@@ RESPONSE ==============', res);
    return res
  })
    .catch(ex => {
      throw ex
  })
}
