import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";

actor {
  type ServiceType = {
    #endOfLease;
    #commercial;
    #builderClean;
    #carpetCleaning;
    #windowCleaning;
    #ovenCleaning;
    #tileAndGrout;
    #officeCleaning;
    #pressureWashing;
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    serviceType : ServiceType;
    message : Text;
    timestamp : Time.Time;
  };

  let submissions = Map.empty<Text, ContactSubmission>();
  var enquiryCount = 0;

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, serviceType : ServiceType, message : Text) : async Bool {
    let timestamp = Time.now();
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      serviceType;
      message;
      timestamp;
    };

    let id = timestamp.toText();
    submissions.add(id, submission);
    enquiryCount += 1;
    true;
  };

  public shared ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    if (caller.toText() != "5pmyj-euaaa-aaaaa-aaa2q-cai") {
      Runtime.trap("Access denied: Caller not authorized");
    };
    submissions.values().toArray();
  };

  public query ({ caller }) func getEnquiryCount() : async Nat {
    enquiryCount;
  };

  public query ({ caller }) func getFilteredSortedSubmissions(serviceType : ?ServiceType) : async [ContactSubmission] {
    let filtered = submissions.values().toArray().filter(
      func(sub) {
        switch (serviceType) {
          case (null) { true };
          case (?desiredType) { sub.serviceType == desiredType };
        };
      }
    );
    filtered;
  };
};
