import { Component } from 'react'
import propsType from './propsType';
import * as style from './style'

class AdvisorComponent extends Component<propsType, any, any> {
    public constructor(props: propsType) {
        super(props)
    }

    public render() {
        const viewHorizon: boolean = this.props.viewHorizon;
        const advisor = this.props.advisor;
        return (
            <div className={`${viewHorizon ? 'flex-col' : 'flex-row'} m-5`}
                style={style.thumbnail}>
                <div className={`${!viewHorizon ? 'mr-5' : ''}`}
                    style={{
                        ...(viewHorizon ? { ...style.thumbnailImgRow, ...style.alsCenter } : style.thumbnailImgCol)
                    }}>
                    {
                        advisor.avatarUrl !== null && <img style={style.avatar} src={advisor.avatarUrl.url} alt="" />
                    }
                </div>
                <div className='flex-col'>
                    <div className='flex-row'>
                        <div>
                            <p>Status:</p>
                        </div>
                        <div className='word-break ml-5'>
                            <p>{advisor.status}</p>
                        </div>
                    </div>
                    <div className='flex-row'>
                        <div>
                            <p>Name:</p>
                        </div>
                        <div className='word-break ml-5'>
                            <p>{advisor.displayName}</p>
                        </div>
                    </div>
                    <div className='flex-row'>
                        <div>
                            <p>Phone:</p>
                        </div>
                        <div className='ml-5 word-break'>
                            <p>{advisor.phone !== null ? advisor.phone : 'None'}</p>
                        </div>
                    </div>
                    <div className='flex-row'>
                        <div>
                            <p>Email:</p>
                        </div>
                        <div className='ml-5 word-break'>
                            <p>{advisor.email !== null ? advisor.email : 'None'}</p>
                        </div>
                    </div>
                    <div className='flex-row'>
                        <p>Categorise:</p>
                        <div className='ml-5 word-break'>
                            {advisor.categoriesCollection.items.map(category => (
                                <p>{category.displayName}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdvisorComponent;