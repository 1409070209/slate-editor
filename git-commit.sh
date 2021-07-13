#!/bin/sh
##git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch Rakefile' HEAD
git filter-branch --env-filter '

OLD_EMAIL="leinuo14212@ipalfish.com"
CORRECT_NAME="lei"
CORRECT_EMAIL="1142908626@qq.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags

git config --global user.name leinuo14212
git config --global user.email leinuo14212@ipalfish.com

