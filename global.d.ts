declare global {
    interface Window {
      AOS: {
        init: (options?: {
          duration?: number;
          once?: boolean;
          easing?: string;
          delay?: number;
          offset?: number;
        }) => void;
      };
    }
  }
  
  export {};
  