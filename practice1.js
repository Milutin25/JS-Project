const usernameObject = {
  profile: {
    username: "coolUser123",
    email: "cooluser123@example.com",
    name: {
      first: "Cool",
      last: "User"
    },
    location: "Earth"
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      app: {
        push: true,
        sounds: false
      }
    }
  },
  activity: {
    lastLogin: "2024-03-26T12:34:56Z",
    recentActions: [
      { action: "logged in", timestamp: "2024-03-26T12:34:56Z" },
      { action: "updated profile", timestamp: "2024-03-25T11:22:33Z" },
      { action: "posted comment", timestamp: "2024-03-24T10:21:20Z" }
    ]
  }
}
console.log(usernameObject.activity.recentActions.length);

for (let i = 0; i <usernameObject.activity.recentActions.length; i++){
    console.log(usernameObject.activity.recentActions[i].timestamp);
}



