git filter-branch -f --env-filter '
OLD_EMAIL="leinuo14212@ipalfish.com"
CORRECT_NAME="lei"
CORRECT_EMAIL="1142908626@qq.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
git filter-branch --commit-filter '
        if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ];
        then
                GIT_AUTHOR_NAME="$CORRECT_NAME";
                GIT_AUTHOR_EMAIL="$CORRECT_EMAIL";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD
git config --global user.email leinuo14212@ipalfish.com
git config --global user.name leinuo14212

