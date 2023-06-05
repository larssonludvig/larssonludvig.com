import Column from '../column/column'
import Row from '../row/row'
import styles from './card.module.css'

function CardImage({ image }) {
    return (
        <Column size="20rem">
            <img src={image} className={styles.cardImage} alt="card_image" />
        </Column>
    )
}


export default function Card({ children, image, leftImage }) {
    return (
        <div className={styles.card}>
            <Row>
                {leftImage && image &&
                    <CardImage image={image} />
                }
                <Column>
                    {children}
                </Column>
                {image && !leftImage &&
                    <CardImage image={image} />
                }
            </Row>
        </div>
    )
}
