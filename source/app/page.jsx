import ExampleCardGrid from "./components/card-grid"

export default async function HomePage() {
    return (
        <>
            <ExampleBlock />
            <ExampleCardGrid />
        </>
    );
}

function ExampleBlock() {
    return (
        <div className="grid text-center"> 
            <h1>Main title</h1>
            <p>Some content</p>
        </div>
    );
}