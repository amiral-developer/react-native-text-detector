
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

@interface RNTextDetector : NSObject <RCTBridgeModule>

@end

@interface RNTextDetectorOptions : NSObject
 
@property NSString *whiteList;
@property NSString *blackList;
 
@end
  