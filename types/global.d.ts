interface Window {
  requestRetreaverNumber?: () => void;
  rtkClickID?: string;
  Retreaver?: {
    Campaign: new (config: { campaign_key: string }) => {
      request_number: (options: any, callback: (number: any) => void) => void;
    };
  };
} 