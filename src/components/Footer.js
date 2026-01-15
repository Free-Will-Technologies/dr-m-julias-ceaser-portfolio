import ViewCounter from "./ViewCounter";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-content">
          <p className="footer-text">
            All Rights Reserved <a href="https://www.frontierwox.in/">FrontierWox Tech Private Limited</a>
          </p>
          <p className="footer-email">
            <a href="mailto:julius.sxc@gmail.com">
              julius.sxc@gmail.com
            </a>
          </p>
          <ViewCounter/>
        </div>
      </div>
    </footer>
  );
}
