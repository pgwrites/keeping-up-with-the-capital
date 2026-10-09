# Keeping Up with the Capital: editorial rules

Every edition follows these rules. Read this file in full before researching or writing. If anything here conflicts with an instruction in a specific request from PG (the owner), the request wins for that edition only.

## 1. What this publication is

- A weekly digest about venture capital and startups, global in scope, with India as the lens.
- The question every edition answers: **what is the money telling us this week?** Not "what happened in VC", but what the deals, valuations, exits and people moves signal.
- Reader: VC enthusiasts, operators and investors who know the basics of venture (rounds, valuations, cap tables). Don't explain basics.
- Published every Friday at 6 PM IST. Each edition covers Saturday to Friday of that week.

## 2. Structure (five sections, in this order)

1. **Greeting** (fixed, exact text, no heading):
   - "Why, hello there, stranger! 👀"
   - "Here for a sip?"
   - "Your favourite tea from Sand Hill Road to Koramangala is poured, and this week, everyone's whispering about money that hasn't even landed yet."
2. **The Big Sip**: the one story or tension that defines the week. The headline is the page's only `#` (H1) heading. About 250 words.
3. **Connecting the Dots**: two or three patterns built from several stories. This is the signature section. Investor theses, exits and people moves live here when they support a pattern. If a pattern doesn't make a reader think "huh", don't run it.
4. **India, Inc.**: two or three insight-led stories. Lead with the insight, use market data as supporting context. Interesting IPOs are written up in prose (what happened, the numbers, why it matters), never as a table.
5. **The Deal Sheet**: deals not already covered elsewhere in the edition.
6. **Watchlist**: three or four open questions for the coming weeks. Questions, not predictions.
7. **Rabbit Holes**: one featured read plus two to four bulleted links.
8. **Sources**: the collapsible "+ Sources" list of every link used.

Skip any section that has nothing good that week. Never pad.

The sign-off ("That's all for the week. See you at 6 PM IST, next Friday.") and the footer come from the layout. Don't write them in the edition file.

## 3. Voice

Write like Jeff Bezos and Paul Graham: a sharp, honest friend explaining to one intelligent person what matters.

- Start with the idea, not an introduction. No scene-setting sentences ("Two labs, two very different bets…", "Three of the week's biggest stories are…"). If removing a sentence loses no idea, remove it.
- Headlines are arguments, not labels. "A $30 million-revenue AI startup sold for more than Airtable", not "Software valuations".
- Observation, then explanation, then implication. Show why a conclusion follows. End each story on the "so what".
- Simple words, short sentences for the key points, specific numbers instead of adjectives.
- Explain the counterintuitive part; that's usually the insight.
- Do the arithmetic for the reader when it reveals something (multiples, per-dollar figures, shares of a total). Compute it; never estimate in your head.
- Gossip is seasoning only. The greeting carries it. In the body, at most a light touch.
- No corporate language (unlock, leverage, robust, seamless, transformative) and no hype.
- Don't write "Translation:", "In other words" or "Quick primer". Just write the explanation as the next sentence.
- Decode only numerical or technical jargon (e.g. "subscribed 100 times", "offer for sale"). Don't explain basic VC terms.

## 4. Opinions: directional calls yes, forecasts no

- Allowed: directional calls about where things are moving, placed after the evidence and woven into the narrative ("Family money is moving from the back of the cap table to the front").
- Not allowed: forecasts of outcomes, sizes or dates ("Anthropic will list above $2 trillion"), claims about what "everyone" thinks, mocking named people.
- Conditionals are fine when grounded ("If Agrani's round closes with the government money attached, …").
- Separate what is known from what is inferred. Attribute claims to the person or outlet that made them.
- Never present a call in a separate box or label. Blend it into the paragraph.

## 5. Sources, voices and fact-checking

- Every fact links to its source. Open and read the source before using it. Never state a number you haven't seen in a source or computed from sourced numbers.
- Prefer primary sources (company announcements, filings, data providers) and reputable reporting (Reuters, Bloomberg, TechCrunch, Inc42, Entrackr, Economic Times, Moneycontrol, Crunchbase News, PitchBook, Dealroom, Newcomer, Fortune).
- Aggregate many voices: investors, technologists, operators and VC enthusiasts. Investor newsletters, fund memos, podcasts with transcripts and blogs (e.g. Tomasz Tunguz, Not Boring, Stratechery) all count. X and LinkedIn posts only when publicly readable or quoted in an article.
- When a call is contested, include the strongest sourced counter-voice.
- When quoting a person, give one or two lines of credentials, blended into the sentence.
- Unconfirmed figures: say "reportedly" in the sentence. No asterisks or footnotes.
- Use descriptors for firms and people only when verified.
- Verify dates and sequences ("four days later", "eight months on") against the sources.
- Proofread for grammar before publishing.

## 6. The narrative test

Every detail must serve its story's headline. If a fact is true, verified and interesting but doesn't support the point, cut it. Each story appears once per edition; other sections may refer to it but never repeat it.

## 7. India rules

- An Indian startup is one headquartered in India or built out of India. Mark flipped companies. SiMa.ai does not count.
- Any story led by an Indian company, Indian founder or India-focused fund goes in India, Inc. Cross-market patterns stay in Connecting the Dots and may mention the Indian angle.
- Add an India angle to a global story only when there is a concrete link: an Indian investor, competitor, customer, policy or comparable deal. Never force it.

## 8. The Deal Sheet format

```html
<li><span class="dco"><a href="COMPANY_SITE">Company</a></span><span class="dmeta">Round · $Amount at $Valuation · Lead investors</span><span class="dsig">What the product does, in plain words. Then the founder, traction or signal that makes the deal worth noticing, with a source link.</span></li>
```

- Two or three lines per deal. Product first, then the interesting signal.
- Link company names to their official website only when verified.
- Leave out any part of the meta line that isn't disclosed rather than writing "Not disclosed".

## 9. Rabbit Holes

- Published within the last seven days. Cherry-pick; skip the section if nothing is good.
- One featured read with a one- or two-line note on why it's worth the time.
- Bullets: descriptive link text only. Don't name the publication or the date.
- At least half the picks should be global, not India-only.

## 10. The memory rule

- `_data/memory.yml` records every investor, company and theme in each edition, with the edition numbers it appeared in.
- The count is the number of **editions**, never the number of mentions.
- An entity appears in the sidebar and gets a page in `_memory/` only once it has appeared in **two or more editions**.
- When an entity reaches two editions, create `_memory/<slug>.md` (template below) and add `page: <slug>` to its entry. Update existing memory pages with each new appearance.

Memory page template:

```markdown
---
title: "Agrani Labs"
description: "Every mention of Agrani Labs in Keeping Up with the Capital."
---

One or two plain sentences on who they are.

- **Edition 001 (9 October 2026):** what happened, with a source link. [Read the edition](/keeping-up-with-the-capital/editions/2026-10-09-anthropic-ipo-family-offices/)
- **Edition 002 (…):** …
```

## 11. Weekly procedure

1. Work out the coverage window: the Saturday to Friday ending on publication day (IST).
2. Research the week across global and Indian sources, plus investor and operator commentary. Keep notes of every source URL you open.
3. Pick the Big Sip and the patterns first, then the India stories, then the Deal Sheet. Apply the narrative test.
4. Write the edition to `_posts/YYYY-MM-DD-short-keyword-slug.md` with this front matter:

```yaml
---
title: "The Big Sip headline, as an argument"
description: "One or two sentences summarising the edition's main stories, for search results."
edition_no: "002"
date_label: "16th October 2026"
card_title: "Short sidebar title, under 40 characters"
covers: "10 October to 16 October 2026"
---
```

   Mirror `_posts/2026-10-09-anthropic-ipo-family-offices.md` for the body markup (intro div, `{: .take}` headings, `pattern` divs, Deal Sheet list, Watchlist, Rabbit Holes, Sources).
5. Fact-check every number and date against its source, then proofread.
6. Update `_data/memory.yml` and any memory pages, following the memory rule.
7. Commit to `main` with the message "Edition NNN: <headline>" and push. GitHub Pages publishes within a few minutes.
