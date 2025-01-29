import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-muted mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-primary">Bright America Bonds</h3>
            <p className="text-sm text-muted-foreground">
              Modernizing infrastructure without raising taxes. A smarter way to build America.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/for-bankers" className="text-sm text-muted-foreground hover:text-primary">
                  For Bankers
                </Link>
              </li>
              <li>
                <Link href="/for-cities" className="text-sm text-muted-foreground hover:text-primary">
                  For Cities
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact Us</h4>
            <p className="text-sm text-muted-foreground">123 Main Street, Anytown, USA 12345</p>
            <p className="text-sm text-muted-foreground">Phone: (555) 123-4567</p>
            <p className="text-sm text-muted-foreground">Email: info@brightamericabonds.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">&copy; 2023 Bright America Bonds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

