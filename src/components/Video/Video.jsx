import './Video.scss';

function Video(props) {

    return (
        <section className="hero">
            <video poster={props.currentVideo.image} className="hero__player" controls>
                {/* <source src={props.currentVideo.video} /> */}
            </video>
        </section>
    );
}

export default Video;