import {Platform} from 'react-native';

function testID(componentType, componentId) {
  let id = `${componentType}_${componentId}`;
  return Platform.OS === 'android'
    ? {accessible: true, accessibilityLabel: id}
    : {testID: id};
}

export default testID;
export {testID};
