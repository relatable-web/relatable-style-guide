export default function RelatableCard({ imageSrc, children }) {
    return (
        <div className="card shadow-xl">
            <figure>
                <img
                    className="h-60"
                    src={imageSrc ?? "/images/example-image-landscape.jpg"}
                    alt="Example image" />
            </figure>
            <div className="card-body">
                {children}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Call to action</button>
                </div>
            </div>
        </div>
    );
}