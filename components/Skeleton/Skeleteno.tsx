import styles from './Skeleteno.module.scss'

const Skeleton = ({loaderStyles}:any) => {
  return (
    <div className={styles.skeleton} style={loaderStyles}>
      <div className={styles['skeleton-right']} style={loaderStyles}>
        <div className={styles.square} style={loaderStyles}></div>
      </div>
    </div>
  );
};

export default Skeleton