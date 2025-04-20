
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
                <span className="font-bold text-white">Tx</span>
              </div>
              <span className="font-bold text-xl">TrustX</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A decentralized platform connecting freelancers and clients with trust and transparency.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace" className="text-sm text-muted-foreground hover:text-foreground">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-sm text-muted-foreground hover:text-foreground">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TrustX. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              Discord
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
