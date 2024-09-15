import RelatableCard from "./card"

export default function RelatableCardGrid() {
    return (
        <div className="container my-4 mx-auto px-4">
            <div className="flex flex-wrap">
                <div className="p-10 gap-5 grid grid-cols-1 md:grid-cols-3">
                    <RelatableCard>
                        <h2 className="card-title">Example card</h2>
                        <p>An example of a card with CTA</p>
                    </RelatableCard>
                    <RelatableCard>
                        <h2 className="card-title">Example card</h2>
                        <p>An example of a card with CTA</p>
                        <p>And some...</p>
                        <p>...longer content</p>
                    </RelatableCard>
                    <RelatableCard imageSrc="/images/example-image-portrait.jpg">
                        <h2 className="card-title">Example card</h2>
                        <p>An example of a card with CTA</p>
                    </RelatableCard>
                </div>
            </div>
        </div>
    )
}