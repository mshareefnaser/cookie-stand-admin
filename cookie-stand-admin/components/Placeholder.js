export default function Placeholder(props) {
    return (
        <div className="w-3/4 p-8 mx-auto my-10 bg-green-300 border-2 border-green-500 rounded text-center">
            <h2 className="text-2xl">Last created stand:</h2>
            <p className="text-center">{props.cookieStand}</p>
        </div>
    )
}
