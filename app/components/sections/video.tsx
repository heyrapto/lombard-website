const Video = () => {
    return (
      <section className="w-full">
        <video
          className="w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/video-section.mp4" type="video/mp4" />
        </video>
      </section>
    )
  }
  
  export default Video