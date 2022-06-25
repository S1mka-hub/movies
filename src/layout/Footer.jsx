export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">© {currentYear} Copyright Text</div>
      </div>
    </footer>
  );
};
