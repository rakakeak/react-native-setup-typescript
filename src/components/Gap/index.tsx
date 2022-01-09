import React, {ReactElement} from 'react';
import {View} from 'react-native';

interface GapProps {
  height?: number;
  width?: number;
}

function Gap({height, width}: GapProps): ReactElement {
  return <View style={{height: height, width: width}} />;
}

export default Gap;
