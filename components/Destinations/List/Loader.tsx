import styles from './../Item/Item.module.scss'
import Skeleton from "../../Skeleton/Skeleteno";

const Loader = () => {
const data = [189, 4554672, 5653, 4784];

    return (
        <div>
            {data.map((item) => {
                return (
                    <div key={item} className={styles.item_list}>
                    <div className="row">
                        <div className="col-3">
                            <div className={styles.item}>
                                <Skeleton />
                                <Skeleton />
                            </div>
                        </div>
                        <div className="col-1">
                            <div className={`${styles.item} d-flex align-items-start`}>
                                <Skeleton />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.item}>
                                <Skeleton />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.item}>
                                <Skeleton />
                            </div>
                        </div>
                    </div>
                </div>
                );
            })}
        </div>
    );
};

export default Loader;