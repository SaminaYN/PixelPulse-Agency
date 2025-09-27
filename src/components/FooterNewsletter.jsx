import React from "react";

const FooterNewsletter = () => {
  return (
    <div className="w-full max-w-lg mx-auto mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Subscribe to my newsletter
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Get updates whenever I post new articles or videos. No spam, unsubscribe anytime.
      </p>

      {/* Substack Embed */}
      <iframe
        src="https://bocol.substack.com/embed"
        width="100%"
        height="200"
        style={{ border: "none", background: "transparent" }}
        scrolling="no"
        title="Newsletter Signup"
      ></iframe>
    </div>
  );
};

export default FooterNewsletter;
