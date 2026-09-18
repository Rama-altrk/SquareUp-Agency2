import './CardNumber.css'

function CardNumber({ title, badge, content, height, color, className }) {
    return (
        <section>
            <div className={`${className} card`} style={{ height: height, }}>
                <div className="mr-titleCard">
                    <h1>{title}</h1>
                    <span style={{ color: color }}>{badge}</span>
                </div>
                <p>{content}</p>
            </div>
        </section>
    )
}

export default CardNumber