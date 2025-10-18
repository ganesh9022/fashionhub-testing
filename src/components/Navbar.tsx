import { Link, useNavigate } from 'react-router-dom';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAdmin = user?.organizationMemberships?.[0]?.role === 'org:admin';

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
            FashionHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/men" className="text-foreground hover:text-accent transition-colors font-medium">
              Men
            </Link>
            <Link to="/women" className="text-foreground hover:text-accent transition-colors font-medium">
              Women
            </Link>
            <Link to="/kids" className="text-foreground hover:text-accent transition-colors font-medium">
              Kids
            </Link>
            {isAdmin && (
              <Link to="/admin" className="text-foreground hover:text-accent transition-colors font-medium">
                Admin Dashboard
              </Link>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {isSignedIn ? (
              <div className="flex items-center gap-2">
                <Link to="/profile">
                  <Button variant="ghost" size="sm">
                    Profile
                  </Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button variant="hero" size="sm">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <Link
              to="/men"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Men
            </Link>
            <Link
              to="/women"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Women
            </Link>
            <Link
              to="/kids"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kids
            </Link>
            {isAdmin && (
              <Link
                to="/admin"
                className="block py-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
