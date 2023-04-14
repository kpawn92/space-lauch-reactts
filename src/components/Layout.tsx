import Footer from "./Footer"

function Layout({ children }: any): JSX.Element {
    return (
        <div className="min-h-screen flex flex-col text-white">
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout