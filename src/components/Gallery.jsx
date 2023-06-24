"use client"
const Gallery = ({ gallery, limit }) => {
    let img1 = [];
    let img2 = [];
    let img3 = [];
    let img4 = [];
    gallery.map((item, index) => {
        if (index < limit) {
            if (index % 4 === 0) {
                img1.push(item);
            } else if (index % 4 === 1) {
                img2.push(item);
            } else if (index % 4 === 2) {
                img3.push(item);
            } else if (index % 4 === 3) {
                img4.push(item);
            }
        }
    })
    console.log(img1, img2, img3, img4);
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                {
                    img1.map((item) => {
                        return (
                            <div
                                key={item}
                            >
                                <img className="h-auto max-w-full rounded-lg" src={item} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="grid gap-4">
                {
                    img2.map((item) => {
                        return (
                            <div
                                key={item}
                            >
                                <img className="h-auto max-w-full rounded-lg" src={item} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="grid gap-4">
                {
                    img3.map((item) => {
                        return (
                            <div
                                key={item}
                            >
                                <img className="h-auto max-w-full rounded-lg" src={item} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="grid gap-4">
                {
                    img4.map((item) => {
                        return (
                            <div
                                key={item}
                            >
                                <img className="h-auto max-w-full rounded-lg" src={item} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Gallery