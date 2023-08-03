export default function Footer({standNum}) {
    return (
        <footer className="fixed bottom-0 w-full p-4 mt-8 text-center bg-green-500">
                <p>{standNum} Locations Worldwide</p>
        </footer>
    );
}