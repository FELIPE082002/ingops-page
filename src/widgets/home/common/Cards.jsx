import PropTypes from 'prop-types';
import {
    Card,
    Typography,
} from "@material-tailwind/react";

function Cards({ img, alt_img, title, text, items, style }) {
    
    let image

    if (img.url.startsWith('/')) {
        image = img.url.substring(1);
    }

    const size = style[0].size

    return (
        <div className='md:m-10 m-2.5'>
            <Card className={`border-solid md:w-${size} shadow-2xl p-5`} >
                <div className='flex flex-col justify-center items-center gap-5'>
                    {/* icon */}
                    <div>
                        <img src={image} alt={alt_img} className='w-28' />
                    </div>
                    {/* titulo */}
                    <div>
                        <Typography color='deep-purple' variant='h4'>
                            {title}
                        </Typography>
                    </div>
                    {/* text */}
                    <div>
                        {text}
                    </div>
                    {/* titulo fijo */}
                    <div>
                        <Typography color='deep-purple' variant='h4'>
                            CON INGOPS TENDRÁS:
                        </Typography>
                    </div>
                    {/* items */}
                    <div>
                        <ol>
                            {
                                items.map((item, index) => (
                                    <li key={index}>{item.text}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </Card>
        </div>
    )
}

Cards.propTypes = {
    img: PropTypes.string.isRequired,
    alt_img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
};

export default Cards