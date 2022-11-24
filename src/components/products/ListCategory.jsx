import useFetch from '@/hooks/useFetch'
import { setNewData } from '@/redux/features/data/dataSlice'
import { useDataState } from '@/redux/store'
import { Category } from '..'


const ListCategory = () => {
  const { error, isLoading } = useFetch('category', setNewData)
  const data = useDataState()

  const activateCategories = data.filter(
    (category) => category.state === 1,
  )

  return (
    <>
      {activateCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </>
  )
}
export default ListCategory
