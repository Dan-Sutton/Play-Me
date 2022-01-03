
PLAY ME! Plan


As a musician, it would be great to have an app that audience members could use to directly send my song requests, rather than having them come and try to talk to me mid-song.

The app needs an easy to use interface, and maybe aim to use darker colours, as it would most likely be used indoors - so having it darker in colour would be easier on the eye. Also as this app will be generally used away from the house, it needs to work well on mobile phones.

Each musician who uses the app has their own unique code. This is so audience members/other users can send requests directly to the performer they are watching. In future, it would be great to have a way for a musician to generate a unique code for each show, so that they are not constantly recieving random requests outside of shows.

The app will take in the song title, artist name, and the user's name. This information will be pushed to a database in HEROKU. This means that the data will be persistent, something that is crucial.

Requests required are: GET, POST, DELETE, DELETE by ID.

    Main aims for version 1:
        - Allow song requests to be POSTed to database
        - Artist can view requests by using GET from database
        - Artist can DELETE a request indivdually OR DELETE the whole list
        - Must be easily useable on Mobile, and can scale dynamically

    Extra aims
        - Unique Request code generator
        - Feedback as to when song requests have passed or failed
        - Ability to create an account and login