import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted mt-20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">FashionHub</h3>
            <p className="text-muted-foreground text-sm">
              Your destination for trendy and affordable clothing for the entire family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/men" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/women" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/kids" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Kids Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Contact Us</li>
              <li className="text-muted-foreground text-sm">Shipping Info</li>
              <li className="text-muted-foreground text-sm">Returns</li>
              <li className="text-muted-foreground text-sm">FAQs</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 FashionHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
