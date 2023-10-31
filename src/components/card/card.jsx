import Column from '../column/column'
import Row from '../row/row'
import styles from './card.module.css'

/**
 * Component for displaying an image in a card
 * 
 * @params {String} image path to image to display in card 
 * @params {Function} imageLink url to navigate to when image is clicked
 * @returns card image component
 */
function CardImage({ image, imageLink }) {
    return (
        <Column size="20rem">
            <div className={styles.imageContainer} onClick={() => window.location.assign(imageLink)} style={{cursor: imageLink ? "pointer" : "clicker"}}>
                <img src={image} className={styles.cardImage} alt="card_image" />
            </div>
        </Column>
    )
}

/**
 * Component for displaying a card with an image and text
 * 
 * @param {Elements} children elements to display in card
 * @param {String} image path to image to display in card
 * @param {Boolean} leftImage if true, image will be displayed on the left side of the card
 * @param {Function} imageLink url to navigate to when image is clicked 
 * @returns Card component
 */
export default function Card({ children, image, leftImage, imageLink, label }) {
    return (
        <div className={styles.card}>
            <Row>
                {leftImage && image &&
                    <CardImage image={image} imageLink={imageLink} />
                }
                <Column>
                    {children}
                </Column>
                {image && !leftImage &&
                    <CardImage image={image} imageLink={imageLink} />
                }
            </Row>
        </div>
    )
}
