const resp = {
  200 : "Success",
  201 : "Created Successfully",
  202 : "Sent Successfully",
  400 : "Data Validation Error",
  401 : "Invalid/Expired",
  403 : "Unauthorized access",
  404 : "Not found",
  429 : "Max limit reached try after sometime",
  500 : "Sorry something unexpected happened at our server, please try after sometime",
  "logged-out-success" : "Logged out successfully",
  "token-generated-success" : "Token generated successfully",
  "account-not-found" : "Account not found",
  "invalid-token" : "Token is invalid. Please re-login.",
  "invalid-otp" : "OTP is invalid. Please re-generate.",
  "expired-token" : "Token is expired. Please re-login.",
  "logged-in-success" : "Logged in successfully",
  "max-otp-reached" : "Max OTP limit reached, try after sometime.",
  "otp-generated-success" : "OTP generated successfully.",
  "guest-fcm-added" : "Guest user FCM added successfully.",
  "depended-cat-not-found" : "Depended category not found.",
  "parent-cat-not-found" : "Parent category not found.",
  "grand-parent-cat-not-found" : "Grand parent category not found.",
  "sub-cat-not-found" : "Sub category not found.",
  "parent-int-not-found" : "Parent interest not found.",
  "cat-add-success" : "Category added successfully.",
  "sub-cat-add-success" : "Sub category added successfully.",
  "int-add-success" : "Interest added successfully.",
  "sub-int-add-success" : "Sub Interest added successfully.",
  "duplicate-sub-int-error" : "Duplicate sub interest detected.",
  "duplicate-int-error" : "Duplicate interest detected.",
  "duplicate-sub-cat-error" : "Duplicate sub category detected.",
  "duplicate-cat-error" : "Duplicate category detected.",
  "cat-int-fetch-success" : "Category and interests fetched successfully.",
  "sub-cat-fetch-success" : "Sub categories fetched successfully.",
  "upload-exceed" : "Size should not exceed 10KB and the file formats should be (png,jpg,jpeg or bmp). Only 1 file allowed at a time.",
  "img-upload-success" : "Image uploaded successfully.",
  "prof-img-upload-success" : "Profile image uploaded successfully.",
  "prof-img-updated-success" : "Profile image updated successfully.",
  "img-deleted-success" : "Image deleted successfully.",
  "max-img-uploaded" : "Max image already uploaded.",
  "img-id-not-present" : "Image id not present in database.",
  "max-device-reached" : "You have already used the max number of allowed devices.",
  "connect-reqs-fetched" : "Connect requests fetched successfully.",
  "connect-req-not-found" : "Connect request not found.",
  "connect-req-accepted" : "Connect request accepted successfully.",
  "connect-req-rejected" : "Connect request rejected successfully.",
  "connect-req-sent" : "Connect request sent successfully.",
  "connect-req-status-fetched" : "Connect request status fetched successfully.",
  "user-blocked" : "User blocked successfully.",
  "user-already-blocked" : "User already blocked.",
  "user-not-blocked" : "User is not blocked.",
  "user-unblocked" : "User unblocked successfully.",
  "prof-fetched" : "Profile fetched successfully.",
  "prof-updated" : "Profile updated successfully.",
  "prof-step-1" : "Profile step 1 completed successfully.",
  "prof-step-2" : "Profile step 2 completed successfully.",
  "prof-step-3" : "Profile step 3 completed successfully.",
  "prof-step-4" : "Profile step 4 completed successfully.",
  "prof-step-1-already" : "Profile step 1 already completed.",
  "prof-step-2-already" : "Profile step 2 already completed.",
  "prof-step-3-already" : "Profile step 3 already completed.",
  "prof-step-4-already" : "Profile step 4 already completed.",
  "nothing-to-update" : "Nothing to update.",
  "req-rec-should-not-same" : "Requester and receiver should not be same.",
  "already-con" : "You are already connected with the receiver.",
  "already-con-received" : "You already received a connect request from the intended receiver, please accept it to get connected.",
  "already-con-pending" : "Your connect request is already pending with the receiver.",
  "connect-req-already-rejected" : "Connect request already rejected.",
  "connect-req-already-accepted" : "Connect request already accepted.",
  "blocked-by-other" : "You cannot perform this action as you are blocked by the other user",
  "please-attach-photo" : "Please attach a photo to upload.",
  "user-fav-added" : "User added to favorite list.",
  "user-fav-removed" : "User removed from favorite list.",
  "shop-fav-added" : "Shop added to favorite list.",
  "shop-fav-removed" : "Shop removed from favorite list.",
  "job-fav-added" : "Job added to favorite list.",
  "job-fav-removed" : "Job removed from favorite list.",
  "user-already-fav" : "User already present in the favorite list.",
  "user-not-fav" : "User not present in the favorite list.",
  "shop-already-fav" : "Shop already present in the favorite list.",
  "shop-not-fav" : "Shop not present in the favorite list.",
  "job-already-fav" : "Job already present in the favorite list.",
  "job-not-fav" : "Job not present in the favorite list.",
  "aadhaar-otp-generated" : "Aadhaar OTP sent.",
  "aadhaar-invalid" : "Invalid aadhaar number.",
  "aadhaar-otp-failed" : "Aadhaar OTP sending failed.",
  "kyc-verified" : "KYC verification completed.",
  "kyc-failed" : "KYC verification failed.",
  "kyc-already-verified" : "KYC already verified.",
  "aadhaar-max-otp" : "Aadhaar Max OTP reached, try after sometime.",
  "prof-step-previous-not-complt" : "Previous profile completion step not completed.",
  "noti-not-found" : "Notification not found.",
  "you-are-blocked" : "You can't access that resource as you are blocked from using our app, please contact support for further assistance.",
  "user-blocked" : "Sorry that user is blocked from using the app.",
  "app-config-updated" : "App config updated successfully.",
  "action-cannot-performed" : "Sorry the requested action cannot be performed.",
  "app-config-updated" : "App config updated.",
  "prof-not-comp" : "Profile not completed.",
  "job-added" : "Job added successfully.",
  "job-updated" : "Job updated successfully.",
  "job-deleted" : "Job deleted successfully.",
  "job-not-found" : "Job not found.",
  "job-already-completed" : "Job already completed, no further actions allowed.",
  "job-marked-completed" : "Job marked completed successfully.",
  "distance-error" : "Distance should be between 1 km and 1000 km",
  "user-inactive" : "Sorry the user is inactive.",
  "payment-not-comp" : "You can't do that operation as your payment is not completed, please complete the payment.",
  "food-not-found" : "Selected food doesnot exist.",
  "food-quantity-less" : "The required quantity of food is not available.",
  "order-not-found" : "Order not found."
}

module.exports = {
  resp
};