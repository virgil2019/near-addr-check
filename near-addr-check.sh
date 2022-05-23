#!/bin/bash
export NEAR_ENV=mainnet

cat account-list | while read account
do
    info=$(near state $account)
    if [[ $? -ne 0 ]]; then
        if [[ ${#account} == 64 ]]; then
            ((16#$account))
            if [[ $? -eq 0 ]]; then
                echo $account "not active but address valid"
                continue
            fi
        fi
        
        echo $account "error"
        continue
    fi

    echo $account "active"
done