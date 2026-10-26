import type { FeaturesLocale } from "./features-types";

export const en: FeaturesLocale = {
  ui: {
    indexTitle: "Everything Dicta does with your meetings",
    indexMetaTitle: "Features: AI meeting notes, transcription and notetaker bot",
    indexMetaDesc:
      "Dicta features: meeting transcription with speakers, AI summaries, a notetaker bot for Zoom, Google Meet and Teams, offline recording, webinars, AI chat and tasks. Works in Uzbek, Russian, English and Arabic.",
    indexSub:
      "Every path ends the same way: a recording, a transcript with speakers and an AI summary with decisions and action items.",
    breadcrumbRoot: "Features",
    benefitsTitle: "Why teams use it",
    howTitle: "How it works",
    faqTitle: "Questions",
    relatedTitle: "Related features",
    moreTitle: "Keep exploring",
    ctaTitle: "Try it on your next meeting",
    ctaSub: "Sign up free and get your first transcript and summary.",
    ctaPrimary: "Start free",
    ctaSecondary: "Download the app",
    useCases: "See use cases",
    pricing: "See pricing",
    allFeatures: "All features",
    learnMore: "Learn more",
    desktopLink: "Download the desktop app",
  },
  features: {
    transcription: {
      name: "Transcription",
      metaTitle: "Meeting transcription in Uzbek, Russian, English and Arabic",
      metaDesc:
        "Turn speech into text with speakers labelled. Dicta transcribes meetings in Uzbek, Russian, English and Arabic and lets you search the text and jump to the moment in the recording.",
      h1: "Speech to text with every speaker labelled",
      sub: "Dicta transcribes your meetings in Uzbek, Russian, English and Arabic, so you can search what was said instead of replaying it.",
      card: "Speech to text in four languages, with speakers.",
      benefits: [
        { t: "Four languages", d: "Uzbek, Russian, English and Arabic, including meetings where people switch between them." },
        { t: "Who said what", d: "The transcript separates speakers, so you can follow the discussion and see who owns each point." },
        { t: "Search and jump", d: "Search the text and open the exact moment of the recording instead of scrubbing through audio." },
      ],
      steps: [
        { t: "Capture the meeting", d: "Record in Dicta's meeting room, send the bot to Zoom, Meet or Teams, record on your phone, or upload a file." },
        { t: "Dicta transcribes", d: "The audio is turned into text and split by speaker automatically." },
        { t: "Read, search, share", d: "Open the transcript next to the recording, search it and copy what you need." },
      ],
      faq: [
        { q: "Which languages can Dicta transcribe?", a: "Uzbek, Russian, English and Arabic." },
        { q: "Does the transcript show who is speaking?", a: "Yes. Dicta separates the speakers in the transcript so you can see who said what." },
        { q: "Can I transcribe a recording I already have?", a: "Yes. Upload an audio or video file and Dicta returns a transcript and an AI summary." },
      ],
    },
    "ai-summary": {
      name: "AI summary",
      metaTitle: "AI meeting summary: decisions, topics and action items",
      metaDesc:
        "After every meeting Dicta writes a short AI summary with the main topics, key decisions and action items with owners. A two-minute read instead of an hour of recording.",
      h1: "An AI summary you can read in about two minutes",
      sub: "Topics, key decisions and action items with owners, written for you after every meeting.",
      card: "Topics, decisions and action items after every meeting.",
      benefits: [
        { t: "Decisions in one place", d: "See what was agreed without rereading the whole transcript." },
        { t: "Action items with owners", d: "Tasks are pulled out of the discussion and assigned to the right person." },
        { t: "Linked to the recording", d: "Every point leads back to the transcript and the exact moment in the recording." },
      ],
      steps: [
        { t: "Finish the meeting", d: "Once a recording is processed, Dicta starts on the summary." },
        { t: "AI reads the transcript", d: "It picks out topics, decisions and tasks from what was said." },
        { t: "Review and send", d: "Open the recap, check it against the transcript and share it with the team." },
      ],
      faq: [
        { q: "What does the summary include?", a: "The main topics, key decisions and action items with an owner for each." },
        { q: "How long does the summary take to read?", a: "About two minutes, even for a long meeting." },
        { q: "Can I check where a point came from?", a: "Yes. The transcript is searchable and links to the exact moment in the recording." },
      ],
    },
    "notetaker-bot": {
      name: "Notetaker bot",
      metaTitle: "Notetaker bot for Zoom, Google Meet and Microsoft Teams",
      metaDesc:
        "Send the Dicta bot into a Zoom, Google Meet or Microsoft Teams call. It records the meeting and gives you a transcript with speakers and an AI summary afterwards.",
      h1: "A notetaker bot for Zoom, Google Meet and Teams",
      sub: "Paste the meeting link and Dicta joins the call, records it and sends you the transcript and summary.",
      card: "Record Zoom, Google Meet and Teams calls with a bot.",
      benefits: [
        { t: "Works with the tools you use", d: "Zoom, Google Meet and Microsoft Teams, with no change to how your team meets." },
        { t: "You can stay present", d: "The bot takes the notes, so you can listen and talk instead of typing." },
        { t: "Same output as every path", d: "A recording, a transcript with speakers and an AI summary with action items." },
      ],
      steps: [
        { t: "Paste the link", d: "Add the Zoom, Meet or Teams meeting link in Dicta." },
        { t: "The bot joins", d: "It enters the call and records it." },
        { t: "Get the results", d: "After the call you find the transcript, summary and tasks in your account." },
      ],
      faq: [
        { q: "Which platforms does the bot support?", a: "Zoom, Google Meet and Microsoft Teams." },
        { q: "Do I need to be the host?", a: "You need a link to the meeting. The bot joins as a participant, so tell the people on the call that it is recording." },
        { q: "What do I get after the call?", a: "A recording, a transcript with speakers and an AI summary with decisions and action items." },
      ],
    },
    "meeting-room": {
      name: "Meeting room",
      metaTitle: "Online meetings in Uzbekistan: browser and app, with AI notes",
      metaDesc:
        "Run online meetings in Dicta's own room: instant or scheduled, join by code from the browser or the apps. Every meeting is recorded, transcribed and summarised.",
      h1: "Online meetings with the notes built in",
      sub: "Start an instant meeting, schedule one, or join by code from the browser, iOS, Android or desktop. Dicta records and summarises it for you.",
      card: "Online meetings in the browser and apps, recorded and summarised.",
      benefits: [
        { t: "Instant or scheduled", d: "Start a meeting in a click, or plan one ahead for the team." },
        { t: "Join by code", d: "Guests join from the browser or the apps with a meeting code." },
        { t: "Notes without a bot", d: "Because the meeting happens in Dicta, the transcript and summary are ready when it ends." },
      ],
      steps: [
        { t: "Create the meeting", d: "Start it now or schedule it, then share the code or link." },
        { t: "Meet", d: "Everyone joins from the browser or the apps and the meeting is recorded." },
        { t: "Open the recap", d: "The transcript with speakers and the AI summary appear in your meetings list." },
      ],
      faq: [
        { q: "Do participants need to install anything?", a: "No. You can join from the browser. Apps for iOS, Android and desktop are also available." },
        { q: "Can I schedule meetings in advance?", a: "Yes. You can start an instant meeting or schedule one for later." },
        { q: "Is the meeting recorded automatically?", a: "Meetings in Dicta's room are recorded and processed into a transcript and summary, so tell participants up front." },
      ],
    },
    "offline-recording": {
      name: "Offline recording",
      metaTitle: "Record an in-person meeting on your phone: transcript with speakers",
      metaDesc:
        "Record a real-world meeting, lecture or interview on your phone. Dicta separates the voices, writes a transcript and an AI summary. Round table mode merges several phones.",
      h1: "Record in-person meetings on your phone",
      sub: "Put the phone on the table. Dicta tells the voices apart and gives you a transcript and a summary of the meeting, lecture or interview.",
      card: "Phone recorder with speaker separation. Round table mode.",
      benefits: [
        { t: "Speakers told apart", d: "Speaker diarization separates the voices, so the minutes show who said what." },
        { t: "Round table mode", d: "One room, many phones. Each person records on their own phone and Dicta merges the tracks." },
        { t: "For meetings and lectures", d: "Management meetings, sales calls, HR interviews, majlis minutes, and student lectures." },
      ],
      steps: [
        { t: "Open the app and record", d: "Start recording on iOS or Android. For a round table, everyone records on their own phone." },
        { t: "Dicta processes it", d: "It separates speakers and merges tracks when several phones were used." },
        { t: "Read the minutes", d: "Get the transcript and the AI summary with decisions and action items." },
      ],
      faq: [
        { q: "Does it work without a Zoom or Meet call?", a: "Yes. Offline recording is for real-world meetings. Just record on the phone." },
        { q: "What is round table mode?", a: "One room, many phones. Each participant records on their own phone and Dicta merges the tracks into a single meeting." },
        { q: "Will it tell the speakers apart?", a: "Yes. Dicta uses speaker diarization to separate the voices in the transcript." },
      ],
    },
    upload: {
      name: "Upload recordings",
      metaTitle: "Audio to text: upload a recording, get a transcript and summary",
      metaDesc:
        "Upload an audio or video file to Dicta and get a transcript with speakers and an AI summary. Works with Uzbek, Russian, English and Arabic recordings.",
      h1: "Upload a recording, get the text back",
      sub: "Already have the audio or video? Upload it and Dicta returns a transcript with speakers and an AI summary.",
      card: "Audio and video files to transcript and summary.",
      benefits: [
        { t: "Audio or video", d: "Bring recordings from other tools, a dictaphone or a phone." },
        { t: "Same result as a live meeting", d: "A transcript with speakers, an AI summary, decisions and action items." },
        { t: "Four languages", d: "Uzbek, Russian, English and Arabic." },
      ],
      steps: [
        { t: "Upload the file", d: "Add an audio or video file in the web app." },
        { t: "Dicta processes it", d: "The speech is transcribed and split by speaker." },
        { t: "Use the results", d: "Read the transcript, the summary and the tasks, or ask questions in AI chat." },
      ],
      faq: [
        { q: "What kind of files can I upload?", a: "Audio and video recordings." },
        { q: "Will I get speakers and a summary?", a: "Yes. Uploaded recordings go through the same pipeline as live meetings." },
        { q: "Which languages are supported?", a: "Uzbek, Russian, English and Arabic." },
      ],
    },
    "desktop-app": {
      name: "Desktop app",
      metaTitle: "Dicta desktop app for macOS and Windows: auto-record meetings",
      metaDesc:
        "The Dicta desktop app for macOS and Windows records the meetings on your computer, then gives you a transcript with speakers and an AI summary.",
      h1: "Record meetings from your computer automatically",
      sub: "The desktop app for macOS and Windows captures the meetings you attend and sends them to Dicta for the transcript and summary.",
      card: "macOS and Windows app that records meetings on your computer.",
      benefits: [
        { t: "Records meetings on your computer", d: "No bot has to join the call; the app records from your machine." },
        { t: "macOS and Windows", d: "Download the build for your computer." },
        { t: "One account everywhere", d: "Your meetings sync with the web, iOS and Android apps." },
      ],
      steps: [
        { t: "Install the app", d: "Download it from the download page and sign in." },
        { t: "Join your meeting as usual", d: "The app records the meeting on your computer." },
        { t: "Find it in Dicta", d: "The transcript and the AI summary appear in your account." },
      ],
      faq: [
        { q: "Which systems does the desktop app support?", a: "macOS and Windows." },
        { q: "Do I still need the bot?", a: "No. The desktop app records on your computer, so no bot has to join the call." },
        { q: "Where do I download it?", a: "On the download page of this site." },
      ],
    },
    webinars: {
      name: "Webinars",
      metaTitle: "Webinars for up to about 600 participants, with AI summary",
      metaDesc:
        "Host webinars in Dicta for up to about 600 participants. Get a recording, a transcript and an AI summary of every session.",
      h1: "Webinars for large audiences",
      sub: "Host sessions for up to about 600 participants and get the recording, transcript and summary afterwards.",
      card: "Webinars for up to about 600 participants.",
      benefits: [
        { t: "Room for a crowd", d: "Webinars support up to about 600 participants." },
        { t: "Recorded and transcribed", d: "You get a transcript and an AI summary of the session." },
        { t: "Reuse the content", d: "Search the transcript or ask questions about it in AI chat." },
      ],
      steps: [
        { t: "Set up the webinar", d: "Create it in Dicta and share the link." },
        { t: "Host the session", d: "Attendees join from the browser or the apps." },
        { t: "Follow up", d: "Use the recording, transcript and summary for your recap." },
      ],
      faq: [
        { q: "How many people can join a webinar?", a: "Up to about 600 participants." },
        { q: "Do I get a transcript?", a: "Yes, together with a recording and an AI summary." },
        { q: "How is it different from a normal meeting?", a: "Webinars are built for large audiences. For small team calls use the meeting room." },
      ],
    },
    "ai-chat": {
      name: "AI chat",
      metaTitle: "AI chat across all your meetings",
      metaDesc:
        "Ask questions about what was said in your past meetings. Dicta's AI chat answers from your transcripts, so you don't have to search by hand.",
      h1: "Ask your meetings a question",
      sub: "AI chat answers from your past meetings: what was decided, who promised what, what came up last month.",
      card: "Ask questions across your past meetings.",
      benefits: [
        { t: "Across meetings", d: "Ask about more than one conversation, not just the last call." },
        { t: "Plain-language questions", d: "Ask the way you would ask a colleague." },
        { t: "Grounded in your transcripts", d: "Answers come from what was actually said in your meetings." },
      ],
      steps: [
        { t: "Record meetings as usual", d: "Every meeting adds to the knowledge Dicta can search." },
        { t: "Open AI chat", d: "Type a question in your own words." },
        { t: "Check the source", d: "Go back to the transcript and recording when you need the exact wording." },
      ],
      faq: [
        { q: "What can I ask?", a: "Anything about your recorded meetings, for example decisions, owners or topics." },
        { q: "Does it use my transcripts?", a: "Yes. It answers from your own meetings." },
        { q: "Can I check an answer?", a: "Yes. Open the transcript and jump to the moment in the recording." },
      ],
    },
    "tasks-integrations": {
      name: "Tasks and integrations",
      metaTitle: "Action items from meetings: tasks, Trello export and Telegram recaps",
      metaDesc:
        "Dicta pulls action items out of every meeting, assigns them to people and exports to Trello and other task trackers. Get meeting recaps in Telegram.",
      h1: "Action items that don't get lost",
      sub: "Tasks are extracted from every meeting with an owner, exported to your task tracker, and recaps can reach you in Telegram.",
      card: "Action items, task export and Telegram recaps.",
      benefits: [
        { t: "Tasks with owners", d: "Dicta lists the action items and who they belong to." },
        { t: "Export to your tracker", d: "Send tasks to Trello and other task trackers instead of retyping them." },
        { t: "Recaps in Telegram", d: "Link your Telegram account and receive meeting summaries there." },
      ],
      steps: [
        { t: "Hold the meeting", d: "In any of the ways Dicta captures meetings." },
        { t: "Review the tasks", d: "Check the action items and owners in the recap." },
        { t: "Send them on", d: "Export to your tracker and get the recap in Telegram." },
      ],
      faq: [
        { q: "Which task tools does Dicta work with?", a: "Trello and other task trackers. Check the app for the current list of integrations." },
        { q: "Can I get summaries in Telegram?", a: "Yes. Link your Telegram account to receive meeting summaries." },
        { q: "Who gets assigned to a task?", a: "Dicta suggests the owner from what was said in the meeting; you can review it." },
      ],
    },
  },
};
