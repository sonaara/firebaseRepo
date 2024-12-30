const accessToken = 'BQDPgsxD7OEbXOE3HyuKnJEQKi7gXMLRV88uXrMp-RC-MfUk2lWdTYyvmdi5vnZvpA5q0a7EMMpZdP9zo1hc3WC5CIPSWKwfktG7Bb3mwv1L1-XD1EnotdtOptwUhhMJ4AO3ZnqweKhu6hOH3aEP8hjN3WTs9wpY1_9CbfYGn5GVwoaCDhizcBGSqdpjlcjSexP4jFlatyxtWXJnS9kWFJUKJZ6-mfw7hpMVDjN_90xsjwYB1SmdKg';
const OAIAT = process.env.OPENAI_API_KEY

const OpenAI = require('openai');
const fetch = require('node-fetch');

const client = new OpenAI({
  apiKey: OAIAT,
})
const fetchRecentSongs = async () => {
  const endpoint = 'https://api.spotify.com/v1/me/player/recently-played?limit=50';
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();               
    console.log('Recently Played Tracks:', data.items.length);
    const items = data.items
    const songs = items.map(item => {
        const song = item.track
        return {
            songName: song.name,
            artistName: song.artists[0].name,
            albumName: song.album.name,
            songId: song.id
        }
    })
    return songs

  } catch (error) {
    console.error('Error fetching recent songs:', error);
  }
};

async function main() {
    const songs = await fetchRecentSongs()
    console.log(songs)
    const prompt = generatePrompt(songs)
    console.log(prompt)

    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion.choices[0].message.content)



}
main()

function generatePrompt(songs) {
    let prompt = `
    Based on the below, output precisely three emojis that represent my music taste. Output only that and nothing else. Avoid using emojis that represent music notes.
    `
    songs.forEach(song => {
        prompt += `${song.songName} by ${song.artistName} from ${song.albumName}\n`
    })
    return prompt
}