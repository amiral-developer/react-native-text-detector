export interface TextDetectorBounding {
  width: number;
  height: number;
  left: number;
  top: number;
}

export interface TextDetectorResponse {
  text: string;
  bounding: TextDetectorBounding;
}

declare class TextDetector {
  static recognize(uri: string, language: string, options?: { whiteList: string, blackList: string }): Promise<TextDetectorResponse[]>;
}

export default TextDetector;
