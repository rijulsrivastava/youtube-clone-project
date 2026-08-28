const videos = [
    {
        _id: "video01",
        title: "Learn React in 30 Minutes",
        thumbnailUrl: "https://picsum.photos/seed/react/500/280",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        description: "A quick tutorial to get started with React.",
        channelId: "channel01",
        uploader: "user01",
        views: 15200,
        likes: 1023,
        dislikes: 45,
        uploadDate: "2024-09-20",
        comments: [
            {
                commentId: "comment01_1",
                userId: "user02",
                text: "Great video! Very helpful.",
                timestamp: "2024-09-21T08:30:00Z"
            },
            {
                commentId: "comment01_2",
                userId: "user03",
                text: "The hooks explanation was so clear and concise.",
                timestamp: "2024-09-21T09:15:00Z"
            },
            {
                commentId: "comment01_3",
                userId: "user04",
                text: "Can you make a follow-up on custom hooks next?",
                timestamp: "2024-09-21T11:45:00Z"
            },
            {
                commentId: "comment01_4",
                userId: "user05",
                text: "Subscribed! Best 30-minute guide out there.",
                timestamp: "2024-09-22T04:20:00Z"
            }
        ]
    },
    {
        _id: "video02",
        title: "JavaScript Full Course",
        thumbnailUrl: "https://picsum.photos/seed/javascript/500/280",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
        description: "Learn JavaScript from beginner to advanced.",
        channelId: "channel02",
        uploader: "user03",
        views: 45200,
        likes: 3400,
        dislikes: 112,
        uploadDate: "2024-09-18",
        comments: [
            {
                commentId: "comment02_1",
                userId: "user06",
                text: "Finally understand closures and prototypes, thanks!",
                timestamp: "2024-09-19T10:15:00Z"
            },
            {
                commentId: "comment02_2",
                userId: "user07",
                text: "Timestamp 2:14:00 saved my interview preparation.",
                timestamp: "2024-09-19T14:30:00Z"
            },
            {
                commentId: "comment02_3",
                userId: "user08",
                text: "Clear audio, great pacing, and excellent examples.",
                timestamp: "2024-09-20T06:00:00Z"
            }
        ]
    },
    {
        _id: "video03",
        title: "Top Music Hits 2024",
        thumbnailUrl: "https://picsum.photos/seed/music/500/280",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
        description: "Best music collection.",
        channelId: "channel03",
        uploader: "user05",
        views: 120000,
        likes: 8500,
        dislikes: 230,
        uploadDate: "2024-09-15",
        comments: [
            {
                commentId: "comment03_1",
                userId: "user09",
                text: "This playlist is pure fire!",
                timestamp: "2024-09-16T12:00:00Z"
            },
            {
                commentId: "comment03_2",
                userId: "user10",
                text: "Listening to this on repeat while working.",
                timestamp: "2024-09-17T09:20:00Z"
            },
            {
                commentId: "comment03_3",
                userId: "user11",
                text: "Track 4 gives me chills every time.",
                timestamp: "2024-09-17T18:40:00Z"
            },
            {
                commentId: "comment03_4",
                userId: "user12",
                text: "Please upload a part 2 with electronic hits!",
                timestamp: "2024-09-18T03:10:00Z"
            },
            {
                commentId: "comment03_5",
                userId: "user13",
                text: "Perfect background beats for study sessions.",
                timestamp: "2024-09-18T15:25:00Z"
            }
        ]
    },
    {
        _id: "video04",
        title: "Best Gaming Moments",
        thumbnailUrl: "https://picsum.photos/seed/gaming/500/280",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        description: "Amazing gaming moments.",
        channelId: "channel04",
        uploader: "user08",
        views: 85000,
        likes: 5600,
        dislikes: 340,
        uploadDate: "2024-09-12",
        comments: [
            {
                commentId: "comment04_1",
                userId: "user14",
                text: "That last 1v5 clutch was unreal!",
                timestamp: "2024-09-13T14:45:00Z"
            },
            {
                commentId: "comment04_2",
                userId: "user15",
                text: "The reaction cam made this 10x funnier.",
                timestamp: "2024-09-13T19:10:00Z"
            },
            {
                commentId: "comment04_3",
                userId: "user16",
                text: "What mouse sensitivity are you running?",
                timestamp: "2024-09-14T02:30:00Z"
            },
            {
                commentId: "comment04_4",
                userId: "user17",
                text: "The sniper shot at 04:12 was calculated.",
                timestamp: "2024-09-14T11:05:00Z"
            }
        ]
    },
    {
        _id: "video05",
        title: "Learn Python From Scratch",
        thumbnailUrl: "https://picsum.photos/seed/python/500/280",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        description: "Complete Python tutorial.",
        channelId: "channel05",
        uploader: "user10",
        views: 67000,
        likes: 4200,
        dislikes: 55,
        uploadDate: "2024-09-10",
        comments: [
            {
                commentId: "comment05_1",
                userId: "user18",
                text: "Perfect for total beginners, highly recommend.",
                timestamp: "2024-09-11T07:10:00Z"
            },
            {
                commentId: "comment05_2",
                userId: "user19",
                text: "The list comprehension section clarified so much.",
                timestamp: "2024-09-11T12:00:00Z"
            },
            {
                commentId: "comment05_3",
                userId: "user20",
                text: "Where can we find the GitHub repo for the exercises?",
                timestamp: "2024-09-12T16:40:00Z"
            }
        ]
    },
    {
        _id: "video06",
        title: "Latest Technology Trends",
        thumbnailUrl: "https://picsum.photos/seed/technology/500/280",
        videoUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",
        description: "Latest developments in technology.",
        channelId: "channel06",
        uploader: "user12",
        views: 34000,
        likes: 1800,
        dislikes: 90,
        uploadDate: "2024-09-08",
        comments: [
            {
                commentId: "comment06_1",
                userId: "user21",
                text: "AI and spatial computing are moving so fast right now.",
                timestamp: "2024-09-09T16:25:00Z"
            },
            {
                commentId: "comment06_2",
                userId: "user22",
                text: "Interesting perspective on open-source hardware.",
                timestamp: "2024-09-10T08:15:00Z"
            },
            {
                commentId: "comment06_3",
                userId: "user23",
                text: "Great summary of the recent tech summit.",
                timestamp: "2024-09-10T14:50:00Z"
            },
            {
                commentId: "comment06_4",
                userId: "user24",
                text: "I hope battery technology catches up soon.",
                timestamp: "2024-09-11T20:00:00Z"
            }
        ]
    },
    {
        _id: "video07",
        title: "Latest World News",
        thumbnailUrl: "https://picsum.photos/seed/news/500/280",
        videoUrl: "https://res.cloudinary.com/demo/video/upload/v1640167520/dog.mp4",
        description: "Today's latest news.",
        channelId: "channel07",
        uploader: "user14",
        views: 90000,
        likes: 2100,
        dislikes: 450,
        uploadDate: "2024-09-05",
        comments: [
            {
                commentId: "comment07_1",
                userId: "user25",
                text: "Thanks for delivering unbiased updates.",
                timestamp: "2024-09-06T11:30:00Z"
            },
            {
                commentId: "comment07_2",
                userId: "user26",
                text: "Appreciate the quick morning briefings.",
                timestamp: "2024-09-06T13:45:00Z"
            },
            {
                commentId: "comment07_3",
                userId: "user27",
                text: "Well structured breakdown of current global events.",
                timestamp: "2024-09-07T05:20:00Z"
            }
        ]
    },
    {
        _id: "video08",
        title: "React Router Tutorial",
        thumbnailUrl: "https://picsum.photos/seed/router/500/280",
        videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",
        description: "Learn React Router.",
        channelId: "channel01",
        uploader: "user01",
        views: 28000,
        likes: 1500,
        dislikes: 30,
        uploadDate: "2024-09-01",
        comments: [
            {
                commentId: "comment08_1",
                userId: "user28",
                text: "The new data loaders pattern makes so much more sense now.",
                timestamp: "2024-09-02T18:05:00Z"
            },
            {
                commentId: "comment08_2",
                userId: "user29",
                text: "Protected routes used to confuse me, thanks for clarifying.",
                timestamp: "2024-09-03T07:40:00Z"
            },
            {
                commentId: "comment08_3",
                userId: "user30",
                text: "Are we still using createBrowserRouter in v7?",
                timestamp: "2024-09-03T16:15:00Z"
            },
            {
                commentId: "comment08_4",
                userId: "user31",
                text: "Clear, straight to the point, no fluff.",
                timestamp: "2024-09-04T09:00:00Z"
            }
        ]
    },
    {
        _id: "video09",
        title: "Next.js 14 Crash Course",
        thumbnailUrl: "https://picsum.photos/seed/nextjs/500/280",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        description: "Master server-side rendering and routing with Next.js.",
        channelId: "channel08",
        uploader: "user17",
        views: 54000,
        likes: 3900,
        dislikes: 72,
        uploadDate: "2024-08-28",
        comments: [
            {
                commentId: "comment09_1",
                userId: "user32",
                text: "Server actions explained in the simplest way possible.",
                timestamp: "2024-08-29T09:40:00Z"
            },
            {
                commentId: "comment09_2",
                userId: "user33",
                text: "App router vs pages router comparison was super insightful.",
                timestamp: "2024-08-29T14:10:00Z"
            },
            {
                commentId: "comment09_3",
                userId: "user34",
                text: "Just rebuilt my portfolio following this tutorial!",
                timestamp: "2024-08-30T18:55:00Z"
            }
        ]
    },
    {
        _id: "video10",
        title: "Top 10 Action Movies of the Decade",
        thumbnailUrl: "https://picsum.photos/seed/movies/500/280",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
        description: "Counting down the best action packed films.",
        channelId: "channel09",
        uploader: "user19",
        views: 310000,
        likes: 12000,
        dislikes: 950,
        uploadDate: "2024-08-25",
        comments: [
            {
                commentId: "comment10_1",
                userId: "user35",
                text: "Mad Max: Fury Road absolutely deserved the top spot.",
                timestamp: "2024-08-26T21:15:00Z"
            },
            {
                commentId: "comment10_2",
                userId: "user36",
                text: "John Wick 4 should have been ranked a bit higher.",
                timestamp: "2024-08-27T03:30:00Z"
            },
            {
                commentId: "comment10_3",
                userId: "user37",
                text: "The editing and sound design on this video are top notch.",
                timestamp: "2024-08-27T12:00:00Z"
            },
            {
                commentId: "comment10_4",
                userId: "user38",
                text: "Mission Impossible Fallout stunt scene gives me vertigo.",
                timestamp: "2024-08-28T08:45:00Z"
            },
            {
                commentId: "comment10_5",
                userId: "user39",
                text: "Solid list! I agreed with almost every pick.",
                timestamp: "2024-08-28T19:20:00Z"
            }
        ]
    },
    {
        _id: "video11",
        title: "15 Minute Morning Yoga",
        thumbnailUrl: "https://picsum.photos/seed/yoga/500/280",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        description: "Start your day right with this relaxing yoga routine.",
        channelId: "channel10",
        uploader: "user21",
        views: 185000,
        likes: 14500,
        dislikes: 120,
        uploadDate: "2024-08-22",
        comments: [
            {
                commentId: "comment11_1",
                userId: "user40",
                text: "Doing this every single morning has transformed my posture.",
                timestamp: "2024-08-23T06:30:00Z"
            },
            {
                commentId: "comment11_2",
                userId: "user41",
                text: "Gentle yet effective stretch for a stiff lower back.",
                timestamp: "2024-08-23T11:15:00Z"
            },
            {
                commentId: "comment11_3",
                userId: "user42",
                text: "Your soothing voice makes the session so peaceful.",
                timestamp: "2024-08-24T05:50:00Z"
            },
            {
                commentId: "comment11_4",
                userId: "user43",
                text: "Day 14 of doing this challenge and feeling energized!",
                timestamp: "2024-08-25T07:10:00Z"
            }
        ]
    },
    {
        _id: "video12",
        title: "How to Make the Perfect Pizza",
        thumbnailUrl: "https://picsum.photos/seed/pizza/500/280",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        description: "Step-by-step guide to authentic Neapolitan pizza.",
        channelId: "channel11",
        uploader: "user23",
        views: 420000,
        likes: 22000,
        dislikes: 310,
        uploadDate: "2024-08-20",
        comments: [
            {
                commentId: "comment12_1",
                userId: "user44",
                text: "The cold fermentation tip changed my pizza crust forever!",
                timestamp: "2024-08-21T17:50:00Z"
            },
            {
                commentId: "comment12_2",
                userId: "user45",
                text: "Looks better than my local Italian restaurant.",
                timestamp: "2024-08-22T01:25:00Z"
            },
            {
                commentId: "comment12_3",
                userId: "user46",
                text: "What brand of 00 flour do you recommend?",
                timestamp: "2024-08-22T14:40:00Z"
            },
            {
                commentId: "comment12_4",
                userId: "user47",
                text: "Made this for dinner tonight, whole family loved it.",
                timestamp: "2024-08-23T20:15:00Z"
            }
        ]
    },
    {
        _id: "video13",
        title: "Understanding Quantum Computing",
        thumbnailUrl: "https://picsum.photos/seed/quantum/500/280",
        videoUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",
        description: "Quantum physics explained in simple terms.",
        channelId: "channel12",
        uploader: "user25",
        views: 95000,
        likes: 8300,
        dislikes: 215,
        uploadDate: "2024-08-15",
        comments: [
            {
                commentId: "comment13_1",
                userId: "user48",
                text: "My brain hurts in a good way, mind-blowing explanation.",
                timestamp: "2024-08-16T13:20:00Z"
            },
            {
                commentId: "comment13_2",
                userId: "user49",
                text: "The superposition coin spin analogy was brilliant.",
                timestamp: "2024-08-17T04:45:00Z"
            },
            {
                commentId: "comment13_3",
                userId: "user50",
                text: "Can you do an episode on quantum cryptography next?",
                timestamp: "2024-08-18T10:30:00Z"
            }
        ]
    },
    {
        _id: "video14",
        title: "Cute Cats Compilation",
        thumbnailUrl: "https://picsum.photos/seed/cats/500/280",
        videoUrl: "https://res.cloudinary.com/demo/video/upload/v1640167509/cat.mp4",
        description: "The funniest and cutest cat moments of the week.",
        channelId: "channel13",
        uploader: "user27",
        views: 890000,
        likes: 54000,
        dislikes: 800,
        uploadDate: "2024-08-14",
        comments: [
            {
                commentId: "comment14_1",
                userId: "user51",
                text: "The orange cat at 02:15 had zero thoughts behind its eyes 😂",
                timestamp: "2024-08-15T08:10:00Z"
            },
            {
                commentId: "comment14_2",
                userId: "user52",
                text: "Instant serotonin boost after a stressful workday.",
                timestamp: "2024-08-15T16:00:00Z"
            },
            {
                commentId: "comment14_3",
                userId: "user53",
                text: "The little kitten trying to jump on the couch melted my heart.",
                timestamp: "2024-08-16T09:25:00Z"
            },
            {
                commentId: "comment14_4",
                userId: "user54",
                text: "Cats are definitely liquid, no question.",
                timestamp: "2024-08-17T11:40:00Z"
            },
            {
                commentId: "comment14_5",
                userId: "user55",
                text: "I replayed the box jump clip five times!",
                timestamp: "2024-08-18T19:50:00Z"
            }
        ]
    },
    {
        _id: "video15",
        title: "CSS Grid vs Flexbox",
        thumbnailUrl: "https://picsum.photos/seed/css/500/280",
        videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",
        description: "When to use Grid and when to use Flexbox in CSS.",
        channelId: "channel08",
        uploader: "user17",
        views: 62000,
        likes: 4100,
        dislikes: 40,
        uploadDate: "2024-08-10",
        comments: [
            {
                commentId: "comment15_1",
                userId: "user56",
                text: "1D vs 2D layout distinction finally clicked for me.",
                timestamp: "2024-08-11T14:35:00Z"
            },
            {
                commentId: "comment15_2",
                userId: "user57",
                text: "Clean visual aids throughout the video. Great work!",
                timestamp: "2024-08-12T06:20:00Z"
            },
            {
                commentId: "comment15_3",
                userId: "user58",
                text: "Now I don't have to guess which layout model to pick.",
                timestamp: "2024-08-13T10:15:00Z"
            }
        ]
    },
    {
        _id: "video16",
        title: "Travel Vlog: Exploring Tokyo",
        thumbnailUrl: "https://picsum.photos/seed/tokyo/500/280",
        videoUrl: "https://res.cloudinary.com/demo/video/upload/v1640167509/boats.mp4",
        description: "Join me as I explore the neon streets of Tokyo.",
        channelId: "channel14",
        uploader: "user30",
        views: 115000,
        likes: 9200,
        dislikes: 180,
        uploadDate: "2024-08-05",
        comments: [
            {
                commentId: "comment16_1",
                userId: "user59",
                text: "Tokyo looks magical at night! Adding this to my bucket list.",
                timestamp: "2024-08-06T19:22:00Z"
            },
            {
                commentId: "comment16_2",
                userId: "user60",
                text: "Which camera and gimbal did you use for the walking shots?",
                timestamp: "2024-08-07T03:50:00Z"
            },
            {
                commentId: "comment16_3",
                userId: "user61",
                text: "The ramen spot in Shinjuku you showed is incredible.",
                timestamp: "2024-08-07T15:30:00Z"
            },
            {
                commentId: "comment16_4",
                userId: "user62",
                text: "Cinematography and color grading are on another level.",
                timestamp: "2024-08-08T08:15:00Z"
            }
        ]
    },
    {
        _id: "video17",
        title: "Beginner's Guide to Photography",
        thumbnailUrl: "https://picsum.photos/seed/camera/500/280",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
        description: "Learn the basics of ISO, Aperture, and Shutter Speed.",
        channelId: "channel15",
        uploader: "user32",
        views: 48000,
        likes: 3500,
        dislikes: 65,
        uploadDate: "2024-08-01",
        comments: [
            {
                commentId: "comment17_1",
                userId: "user63",
                text: "Finally got my DSLR out of auto mode thanks to this!",
                timestamp: "2024-08-02T11:00:00Z"
            },
            {
                commentId: "comment17_2",
                userId: "user64",
                text: "The exposure triangle illustration made it very easy to follow.",
                timestamp: "2024-08-03T05:40:00Z"
            },
            {
                commentId: "comment17_3",
                userId: "user65",
                text: "Awesome tips for shooting in low light conditions.",
                timestamp: "2024-08-03T17:25:00Z"
            }
        ]
    },
    {
        _id: "video18",
        title: "DIY Home Office Makeover",
        thumbnailUrl: "https://picsum.photos/seed/desk/500/280",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        description: "Transforming a small space into a productive office.",
        channelId: "channel16",
        uploader: "user34",
        views: 75000,
        likes: 6800,
        dislikes: 110,
        uploadDate: "2024-07-28",
        comments: [
            {
                commentId: "comment18_1",
                userId: "user66",
                text: "The under-desk cable management tray was pure genius.",
                timestamp: "2024-07-29T15:40:00Z"
            },
            {
                commentId: "comment18_2",
                userId: "user67",
                text: "Where did you get that walnut monitor stand?",
                timestamp: "2024-07-30T09:10:00Z"
            },
            {
                commentId: "comment18_3",
                userId: "user68",
                text: "The warm ambient lighting gives it such cozy vibes.",
                timestamp: "2024-07-31T02:00:00Z"
            },
            {
                commentId: "comment18_4",
                userId: "user69",
                text: "Incredible transformation for such a compact room.",
                timestamp: "2024-07-31T18:20:00Z"
            }
        ]
    },
    {
        _id: "video19",
        title: "SpaceX Starship Launch Analysis",
        thumbnailUrl: "https://picsum.photos/seed/space/500/280",
        videoUrl: "https://res.cloudinary.com/demo/video/upload/v1640167516/skater.mp4",
        description: "Breaking down the latest test flight.",
        channelId: "channel12",
        uploader: "user25",
        views: 220000,
        likes: 15600,
        dislikes: 420,
        uploadDate: "2024-07-25",
        comments: [
            {
                commentId: "comment19_1",
                userId: "user70",
                text: "The telemetry data breakdown during re-entry was fascinating.",
                timestamp: "2024-07-26T22:05:00Z"
            },
            {
                commentId: "comment19_2",
                userId: "user71",
                text: "Witnessing space history unfolding in real time.",
                timestamp: "2024-07-27T06:30:00Z"
            },
            {
                commentId: "comment19_3",
                userId: "user72",
                text: "Superb coverage without any clickbait. Thank you!",
                timestamp: "2024-07-27T14:15:00Z"
            },
            {
                commentId: "comment19_4",
                userId: "user73",
                text: "Can't wait to see the booster catch system in action.",
                timestamp: "2024-07-28T11:50:00Z"
            }
        ]
    },
    {
        _id: "video20",
        title: "Vue.js 3 Composition API",
        thumbnailUrl: "https://picsum.photos/seed/vue/500/280",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
        description: "Everything you need to know about Vue 3's new API.",
        channelId: "channel02",
        uploader: "user03",
        views: 41000,
        likes: 2900,
        dislikes: 35,
        uploadDate: "2024-07-20",
        comments: [
            {
                commentId: "comment20_1",
                userId: "user74",
                text: "Composition API makes sharing logic across components effortless.",
                timestamp: "2024-07-21T08:50:00Z"
            },
            {
                commentId: "comment20_2",
                userId: "user75",
                text: "The ref vs reactive comparison saved me from a lot of bugs.",
                timestamp: "2024-07-22T04:15:00Z"
            },
            {
                commentId: "comment20_3",
                userId: "user76",
                text: "Concise and well structured. Great tutorial!",
                timestamp: "2024-07-22T19:30:00Z"
            }
        ]
    }
];

export default videos;