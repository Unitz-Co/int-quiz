import React from 'react'
import './List.css'
const List = ({Data}) => {
  return (
    <div className="list_item">
            <div className="item-img">
                {
                    Data.avatarUrl !== null ? <img src={Data.avatarUrl.url} alt=""/> : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAB3CAMAAAAaXnMcAAAAMFBMVEXK0eL////Z3urQ1uXV2+js7vT4+fvx8/f8/P7k5/Dg5O7c4ez09vnn6vLGzuDT2ehO3A38AAADjElEQVRoge2b65arIAxGVVDxhu//tge1U22rkp1qxzmr38yaX+LsBgghSZNUKXdXEX6D2knlTfmkblBVVfWgJigbZK3tg0xQMupn9G14Xs6Du8XgafQ4fnrD+Ir5Nbvy3kee2HiLH3T7+wFJPsvZMl+Ku67AcBWK/rcBRl2Dwv42wKgvxazstwFGfSlmNfqhPjE2a5rp6M/ecn96CtO1bhn15FmijgGUFD4rV6KvXEtRqxj6FYZBhXLjqygatw4R1KhmRUNR7QXFtQaj4kO6/di84hgeU/gIRJp2H6BoYhBhz2IMCm62F+askrowSpELIII14NqAFFYEkabQGJBiw1u9awy2kkwhpHDotZCil6zNUSxiYBTSZRFc6IkUAmdxE/NDiMLXJ1GUiGL3HPsYRfQMuRoFchhnUbA9cg2KFlHIzrIvxRUp2D2n+FKcTsFO9mtQoKDoz9nConOE2MKU4oAvzZHDIBTy6GK0Bvh4hEJ+lgU5kFX+gxRoRhy4niEKeex7GYoWUPSEIkMU4MV9Ch6W38yCSCiJKAyhILd2ROGlN/ZBJNdnEQVxGCT/iihA4gAtTkhx1snOKMIyEopllDJGIUzxpSkrkEIKaQLDseQatYXQccEUH6UQpX7pzQxTJDLHBevmDaUQLc8Cpn4xhehcpWlwTJG0AgpaPeMUAsdFTRHCJ0oRdxkk1vt5JaWIB8G4RKuiiOzWAlfvdBT7C7TlNcTqeFuU3Bb/LQXep0MkySEiZSuFLS5BkWgoIjGwgiLnFD5StlLsVE7R57EQgzccYQpJRRVX+zGFKPyl1sAUooiPnmcljX4lELgdhVLIEinUfUIK4a2d5PcUFNLOB2iMlt3ZpakDxxrqCYU3jTiZ09akvRBQmIoklAJIJeYQUvikkfbCLJULLyYSCu9tJ08lPaqoJe2WAgo6E09y8YkJZ1PkCZtrzTDbozP79ohRWM1qeJXbz2fsUqz2sypVVGbbhexRNJLbOVBbb03MFoVPDrTDXS5fP/KNW6dQeQeJ2jWOdQp78Fw8crw2bK9QbPY3H6aXHfNKYVChUKmnhu0XiuwtPymWe4gJnyk+YYhJy9tCnz5QnL0iNjAeKT4JsWzYXlKAVsFDNKcClxSoQniE7it0SSGvRh2kewOKXVCUhdtWOvwcrWyFAun+FV0TVf+qpy/5qikO1XUosrjslnq7Yu9+c3Ie/rdZUvwDB2ItI+lgBuIAAAAASUVORK5CYII=" alt=""/>
                }
            </div>
            <div className="item-content">
                <h3>{Data.displayName}</h3>
                <p>{Data.email}</p>
                <p>{Data.phone}</p>
                <span className={Data.status === 'offline' ? 'status1' : 'status2'}>{Data.status}</span>
            </div>
    </div>
             
  )
}

export default List