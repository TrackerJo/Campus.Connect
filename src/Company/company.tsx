import {  StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './company.css'
import { isLoggedIn } from '../api/auth'
import { Company, Opportunity, OpportunityType, ShiftType, Location, CompanyType, Job, OneTimeVolunteer, EventDate, RecurringVolunteer, StudentData } from '../constants'
import { addOpportunity, deleteCloudTask, deleteOpportunity, getCompany, getCompanyOpportunities, getOpportunities, getStudent, getUserData, updateCompany, updateCompanyName, updateOpportunity } from '../api/db'
import EditIcon from '../assets/edit.png'
import AddLocationDialog from '../components/Add_Location_Dialog'
import LocationTile from '../components/Location_Tile'
import EditLocationDialog from '../components/Edit_Location_Dialog'
import EditCompanyNameDialog from '../components/Edit_Company_Name_Dialog'

function App() {
   
    const [accountType, setAccountType] = useState<"student" | "employer">("student")
    const [loading, setLoading] = useState(true)
    const [company, setCompany] = useState<Company | null>(null)
    const [editLocation, setEditLocation] = useState<Location | undefined>(undefined)
    const addLocationDialogRef = useRef<HTMLDialogElement>(null)
    const editLocationDialogRef = useRef<HTMLDialogElement>(null)
    const [loadingCompanyType, setLoadingCompanyType] = useState(false)
    const editCompanyNameDialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        isLoggedIn(() => {})
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
      
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "employer")
            
            
        }

      

        getCompany().then((company) => {    
            if (!company) {
                window.location.href = '/'
            }
            setCompany(company)
            setLoading(false)
        }
        )


       

    }, [])

    return (
        <>
        <div className='title'>
            <h1>
             {company == null ? "" : company.name}
            </h1>
          
        </div>
        <div className='center'> 
            {loading ? <div className='loader'></div> : company != null ?
                <div className='companyInfo'>
                    <button className='ActionBtn' onClick={(e) => {
                        editCompanyNameDialogRef.current!.showModal()
                    }}>Edit Company Name</button>
                    <h2>Join Code: {company.joinCode}</h2>
                    <div className='row'>
                        <h2>Company Type:</h2>
                       {loadingCompanyType ? <div className='loader'></div> : <select name="" id="" value={company.type} onChange={async (e) => {
                            setLoadingCompanyType(true)
                            const newCompany = Company.fromMap(company.toMap())
                            newCompany.type = e.target.value as CompanyType
                            newCompany.lastUpdated = Date.now()
                            setCompany(newCompany)
                            await updateCompany(newCompany!)
                            setLoadingCompanyType(false)
                        }}>
                            {Object.keys(CompanyType).map((type) => {
                                return <option value={type}>{type}</option>
                            })}
                        </select>}
                    </div>
                   
                    <h2>Default Location</h2>
                    <div className='center-location'>
                            <LocationTile location={
                                company.location
                            } canEdit={true} canDelete={false} onEdit={async () => {
                                setEditLocation(company.location)
                                editLocationDialogRef.current!.showModal()
                            }} onDelete={async () => {
                                
                            }} />
                    </div>
                    
                    <h2>Saved Locations</h2>
                    <div className='saved-locations'>
                        {company.savedLocations.map((location) => {
                            return <LocationTile location={
                                location
                            } canEdit={true} canDelete={true} onEdit={async () => {
                                setEditLocation(location)
                                editLocationDialogRef.current!.showModal()
                            }} onDelete={async () => {
                                const newCompany = Company.fromMap(company.toMap())
                                newCompany.savedLocations = company.savedLocations.filter((savedLocation) => savedLocation.name != location.name)
                                newCompany.lastUpdated = Date.now()
                                await updateCompany(newCompany)
                                setCompany(newCompany)
                            }} />
                        })}
                    </div>
                    <button className='ActionBtn' onClick={() => {
                        addLocationDialogRef.current!.showModal()
                    }}>Add Location</button>

                 </div>
                     : <></>}
            
            <button className='ActionBtn' onClick={() => {

                window.location.href = `/`

            }}>
                Back
            </button>
        </div>
       { company != null && <AddLocationDialog dialogRef={addLocationDialogRef} existingLocations={company!.savedLocations} savedLocations={[]} close={() => {
            addLocationDialogRef.current!.close()
        }} addLocation={async (newLocation) => {
            const newCompany = Company.fromMap(company!.toMap())
            newCompany!.savedLocations.push(newLocation)
            newCompany!.lastUpdated = Date.now()
            await updateCompany(newCompany!)
            setCompany(newCompany)



        }} />}
        <EditLocationDialog dialogRef={editLocationDialogRef} location={editLocation} close={() => {
            editLocationDialogRef.current!.close()
            setEditLocation(undefined)
        }
        } editLocation={async (newLocation) => {
            const newCompany = Company.fromMap(company!.toMap())
            newCompany!.savedLocations = company!.savedLocations.map((location) => {
                if (location.name == newLocation.name) {
                    return newLocation
                }
                return location
            })
            newCompany!.lastUpdated = Date.now()
            await updateCompany(newCompany!)
            setCompany(newCompany)
            editLocationDialogRef.current!.close()
            setEditLocation(undefined)
        }
        } />
        <EditCompanyNameDialog dialogRef={editCompanyNameDialogRef} companyName={company?.name} close={() => {
            editCompanyNameDialogRef.current!.close()
        }
        } editCompanyName={async (newName) => {

            const newCompany = Company.fromMap(company!.toMap())
            newCompany.name = newName
            await updateCompany(newCompany)
            await updateCompanyName(newCompany.id, newName)
            setCompany(newCompany)
            editCompanyNameDialogRef.current!.close()
        }
        } />
        </>
    )
}

export default App
