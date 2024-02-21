'use client';
import { emojisplosions, emojisplosion } from 'emojisplosion';

const FeedbackSection = () => {
    const handleEmojiClick = () => {

        const { cancel } = emojisplosions({
            emojis: ["👍"]
        });

        setTimeout(cancel, 5000);
    }

    const handleEmojiClick2 = () => {
        emojisplosion({
            emojiCount: () => Math.random() * 100 + 100,
            emojis: ["😂"]
        })
    }

    const handleEmojiClick3 = () => {
        const heartCoords = [
            [500, 600], // bottom point
            [500, 410], // center point
            // left line (y = x + 100)
            [350, 450],
            [375, 475],
            [400, 500],
            [425, 525],
            [450, 550],
            [475, 575],
            // right line (y = -x + 1100)
            [650, 450], 
            [623, 477],
            [600, 500],
            [550, 550],
            [574, 526],
            [526, 574],
            // left curve
            [340, 410],
            [340, 430],
            [350, 385],
            [370, 365],
            [400, 350],
            [430, 355],
            [460, 370],
            [480, 385],
            // right curve
            [520, 385],
            [540, 370],
            [570, 355],
            [600, 350],
            [630, 365],
            [650, 385],
            [660, 410],
            [660, 430],
        ];
    
        const randXVelocity = (Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1);
        const randYVelocity = (Math.random() * -15) - 3;
    
        const randStartXCoord = Math.random() * 350 * (Math.round(Math.random()) ? 1 : -1);
        const randStartYCoord = Math.random() * 350 * (Math.round(Math.random()) ? 1 : -1);
    
        for (let i = 0; i < heartCoords.length; i++) {
            const xCoordinate = heartCoords[i][0];
            const yCoordinate = heartCoords[i][1];
    
            emojisplosion({
                emojis: ["❤️‍🔥"], 
                emojiCount: 1,
                position: {
                    x: xCoordinate + randStartXCoord,
                    y: yCoordinate + randStartYCoord,
                },
                physics: {
                    rotationDeceleration: 0,
                    fontSize: 35,
                    gravity: 0.15,
                    initialVelocities: {
                        x: randXVelocity,
                        y: randYVelocity,
                        rotation: 0 // Adding rotation property here
                    },
                    rotation: 0,
                }
            });
        }
    }
    
    const handleEmojiClick4 = () => {
        const { cancel } = emojisplosions({
            interval: 40,
            emojis: ["😍"]
        })
        setTimeout(cancel, 5000);
    }

    const handleEmojiClick5 = () => {
        emojisplosion({
            emojis: ["🚀"],
            physics: {
                fontSize: {min: 20, max: 38},
                gravity: 0.1,
                initialVelocities: {
                    x: 0,
                    y: 0,
                    rotation: {min: -14, max: -14},
                },
                rotationDeceleration: 1.01,
            }
        });
    };
    
    


    
    
    
 


    return (
        <div>
            <div className='md:w-5/6 md:mx-auto bg-[#ffedec] md:rounded-[80px] px-10 md:p-20 items-center justify-center py-10'>
                <div className='md:flex'>
                    <div className='text-[#92312a] md:mx-auto md:text-center flex md:justify-center items-center text-4xl md:text-6xl  font-medium md:w-1/2'>
                        Provide Fun Feedback
                    </div>
                    <div className='text-xl md:text-3xl text-[#92312a] leading-relaxed font-light justify-start items-start flex md:w-1/2 mx-auto'>
                        Offer feedback on a project using a quick video commentary or create a one-on-one session for personal attention and encouragement from anywhere.
                    </div>
                </div>
                <div className='my-10 border md:p-20 px-8 py-8 rounded-[80px] items-center justify-center flex bg-white space-x-6 md:space-x-10 shadow-xl'>

                    <div onClick={handleEmojiClick}>
                        <div className='cursor-pointer text-3xl md:text-6xl'>
                            👍
                        </div>

                    </div>

                    <div onClick={handleEmojiClick2}>
                        <div className='cursor-pointer text-3xl md:text-6xl'>
                            😂
                        </div>

                    </div>

                    <div onClick={handleEmojiClick3}>
                        <div className='cursor-pointer text-3xl md:text-6xl'>
                            ❤️
                        </div>

                    </div>

                    <div onClick={handleEmojiClick4}>
                        <div className='cursor-pointer text-3xl md:text-6xl'>
                            😍
                        </div>

                    </div>

                    <div onClick={handleEmojiClick5}>
                        <div className='cursor-pointer text-3xl md:text-6xl'>
                            🚀
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default FeedbackSection