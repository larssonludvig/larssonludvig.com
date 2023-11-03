import styles from './itemList.module.css'
import Row from '../row/row'
import Column from '../column/column'
import SubSection from '../sections/subsection'

export default function ItemList({ items }) {
    return (
        <div className={styles.itemList}>
            {items?.map((item, index) => {
                return (
                    <SubSection key={index} label={item.name} icons={item.icons}>
                        <Row>
                            <Column>
                                {item.description}
                            </Column>
                            <Column width={"10rem"}>
                                <img src={item.img} alt={item.name} className={styles.image} />
                            </Column>
                        </Row>
                    </SubSection>    
                )
            })}
        </div>
    )
}