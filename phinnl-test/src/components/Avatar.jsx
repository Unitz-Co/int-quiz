import clsx from 'clsx'

const unknownAvatar =
  'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg'

export default function Avatar({ url, online }) {
  return (
    <div>
      <div className="relative">
        <img
          src={url || unknownAvatar}
          className="w-20 h-20 md:w-28 md:h-28 rounded-full"
          alt="avatar"
        />
        <div
          className={clsx(
            'rounded-full w-4 h-4 md:w-6 md:h-6 absolute bottom-1 right-1 border-2 md:border-4 border-solid border-white',
            {
              'bg-green-400': online,
              'bg-gray-500': !online,
            }
          )}
        ></div>
      </div>
    </div>
  )
}
