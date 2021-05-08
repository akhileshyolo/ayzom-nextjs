import Image from 'next/image'

export default function FirstPost() {
    return <div>
      <h1>First Post</h1>
        <Image
          src="/images/akhilesh.png" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Akhilesh Yadav Picture"
        />
    </div>
}