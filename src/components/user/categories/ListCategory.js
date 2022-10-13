import Category from "./Category"
import style from './listCategory.module.scss'

export default function ListCategory({listCate = []}) {

    return (<div className={style.listCategory}>
        <strong>CATEGORY</strong>
        {listCate.length !== 0 ? 
        listCate.map((cate, index) => {
            return (<Category key ={index} category={cate}></Category>)
        })
        :
        <Category></Category>
        }
    </div>)
}