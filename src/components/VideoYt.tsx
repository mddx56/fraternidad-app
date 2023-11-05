import YouTube, { YouTubeProps } from 'react-youtube';
import TitleCard from '../features/common/components/Cards/TitleCard';

function VideoYt() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        //height: 'auto',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <>
            <TitleCard title="Video Informativo" topMargin="mt-2" >
                <YouTube videoId="t8_huMOj1_0" opts={opts} onReady={onPlayerReady} />
            </TitleCard>
        </>);
}

export default VideoYt;