type css\webkit.css | cleancss -e -b -o css\webkit.css
type css\mozilla.css | cleancss -e -b -o css\mozilla.css
type css\opera.css | cleancss -e -b -o css\opera.css
type css\combiners-nsfw.css | cleancss -e -b -o css\combiners-nsfw.css
type css\combiners-sfw.css | cleancss -e -b -o css\combiners-sfw.css
type css\combiners-nsfw(sub).css | cleancss -e -b -o css\combiners-nsfw(sub).css

type css\webkit.css | enhancecss -o css\webkit.css
type css\mozilla.css | enhancecss -o css\mozilla.css
type css\opera.css | enhancecss -o css\opera.css
type css\combiners-nsfw.css | enhancecss -o css\combiners-nsfw.css
type css\combiners-sfw.css | enhancecss -o css\combiners-sfw.css
type css\combiners-nsfw(sub).css | enhancecss -o css\combiners-nsfw(sub).css

rem csstidy css\combiners-nsfw(sub).css --template=high css\combiners-nsfw(sub).css
rem csstidy css\combiners-nsfw.css --template=high css\combiners-nsfw.css
rem csstidy css\combiners-sfw.css --template=high css\combiners-sfw.css
