export default function Home() {
    return (
        <div className="flex min-h-screen gap-12 items-center justify-center">
            <div>
                <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
                    Welcome to Acme Store
                </h1>
                <p className="text-lg text-gray-700 mt-4">
                    Your one-stop shop for all your needs!
                    No roadrunners were harmed in the making of this website.
                </p>
            </div>
            <img src="./acme.jpg" alt="Acme Store" width={400} />
        </div>
    );
}
