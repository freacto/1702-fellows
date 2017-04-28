# Prompt (no coding. just an exercise in thinking out something larger scale and exploring what you know)

You have a logfile.txt which contains logs from all the users who are visiting your site.

Each new line starts with a unique user ID

Provide an efficient algorithm for determining all the unique visitors to your website.

### Facts the interviewer may provide in response to questions or to nudge them:

- it's some 16 digit string that is the ID
- you want the actual users and a way to identify them, not just a count



<details>
  <summary>Once they have an answer</summary>
  <p> Tell them the text file is going to be massive. really big. 1TB. if they think something is efficient, tell them it's some million billion lines of user logs.
They'll probably have already said they want to be splicing the text on every new line just fine, so ask them the time and space complexity of their answer.
  (for example: They most likely opted for some hash table, which is fine. They should be able to explain clearly that the space is going to be O(N) where N is the number of uuid's, and that time is going to be O(N*M) where N is the number of lines and M is the number of digits in the id.)
  What happens if we actually don't have that space in memory?
  <details>
    <summary>tree?</summary>
    <p>A way to save space on storing all of those id's would be using a prefix tree / trie. Especially as the number grows larger, you'll shave off a factor of N (uhm cannot confirm the math for 100% but i'll take interview cake's word for it)
  </p></details>
  <details>
    <summary>storing outside the server</summary>
    <p>So if you're not keeping some javascript object because this thing is massive... you're using a database, right? What does this mean for your solution and the time it takes?
      <details>
      <summary>push them to answer</summary>
      <p>They should see that the size of data really means you want a database, and that querying the database would take around the 1ms range to much larger (and what if it's over a network??), as opposed to the nanoseconds it takes to be working within memory...
        <details>
        <summary>so what does that entail?</summary>
        <p>i.e. if you thought of a trie, i don't think you should be thinking SQL databases if that's what you still want to use.
        i.e. hows your solution compare for when we're trying to save on time? how can you optimize it if we know our database in particular is slow?
        i.e. what can we do with our database? (i.e. sharding by first digit into 10 diff dbs)
        just keep asking them to speak about tradeoffs and see the depth of their knowledge c:
        i'm curious about this myself and am continuing to learn about all this
      </p></details>
    </p></details>
  </p></details>

</p></details>
